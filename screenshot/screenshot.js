/*!
 * screenshot.js — Browser page screenshot utility
 * Uses html2canvas (loaded from CDN if not already present)
 *
 * USAGE:
 *   1. Include this script on your page:
 *        <script src="screenshot.js"></script>
 *
 *   2. Add a trigger button anywhere in your HTML:
 *        <button id="screenshotBtn">Take Screenshot</button>
 *
 *   3. That's it! The button will capture the page and download a PNG.
 *
 * ADVANCED — call programmatically:
 *        Screenshot.capture({ filename: 'my-page', scale: 2 });
 *
 * OPTIONS:
 *   filename  — downloaded file name (without extension). Default: 'screenshot'
 *   scale     — pixel density multiplier (1 = normal, 2 = retina). Default: window.devicePixelRatio
 *   selector  — CSS selector to capture a specific element. Default: captures full page
 *   format    — 'png' or 'jpeg'. Default: 'png'
 *   quality   — JPEG quality 0–1 (only for format:'jpeg'). Default: 0.95
 *   onStart   — callback fired before capture begins
 *   onDone    — callback fired with the blob after download
 */

(function (global) {
  'use strict';

  var HTML2CANVAS_CDN =
    'https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js';

  /* ── Load html2canvas from CDN if not already present ── */
  function loadHtml2Canvas(callback) {
    if (typeof html2canvas !== 'undefined') {
      callback(null);
      return;
    }
    var script = document.createElement('script');
    script.src = HTML2CANVAS_CDN;
    script.onload = function () { callback(null); };
    script.onerror = function () {
      callback(new Error(
        'Failed to load html2canvas from CDN. ' +
        'Check your internet connection or include it manually.'
      ));
    };
    document.head.appendChild(script);
  }

  /* ── Trigger a file download from a canvas ── */
  function downloadCanvas(canvas, filename, format, quality) {
    var mimeType = format === 'jpeg' ? 'image/jpeg' : 'image/png';
    var ext      = format === 'jpeg' ? 'jpeg' : 'png';

    canvas.toBlob(function (blob) {
      if (!blob) {
        console.error('[screenshot.js] Failed to create image blob.');
        return;
      }
      var url = URL.createObjectURL(blob);
      var a   = document.createElement('a');
      a.href     = url;
      a.download = filename + '.' + ext;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(url); }, 10000);
    }, mimeType, quality != null ? quality : 0.95);
  }

  /* ── Add a temporary "capturing…" overlay class ── */
  function setCapturingState(active) {
    document.documentElement.classList.toggle('screenshot-capturing', active);
  }

  /* ── Core capture function ── */
  function capture(options) {
    options = options || {};

    var filename = options.filename || 'screenshot';
    var scale    = options.scale    != null ? options.scale : (window.devicePixelRatio || 1);
    var selector = options.selector || null;
    var format   = (options.format  || 'png').toLowerCase();
    var quality  = options.quality  != null ? options.quality : 0.95;
    var onStart  = typeof options.onStart === 'function' ? options.onStart : null;
    var onDone   = typeof options.onDone  === 'function' ? options.onDone  : null;

    if (onStart) onStart();
    setCapturingState(true);

    loadHtml2Canvas(function (err) {
      if (err) {
        setCapturingState(false);
        console.error('[screenshot.js]', err.message);
        alert('[screenshot.js] ' + err.message);
        return;
      }

      var target = selector
        ? document.querySelector(selector)
        : document.body;

      if (!target) {
        setCapturingState(false);
        console.error('[screenshot.js] Element not found for selector:', selector);
        return;
      }

      /* html2canvas options */
      var h2cOptions = {
        scale:           scale,
        useCORS:         true,        /* allow cross-origin images */
        allowTaint:      false,
        logging:         false,
        scrollX:         0,
        scrollY:         -window.scrollY,
        windowWidth:     document.documentElement.scrollWidth,
        windowHeight:    document.documentElement.scrollHeight,
        backgroundColor: '#ffffff',
      };

      /* If capturing a specific element, add its rect */
      if (selector && target !== document.body) {
        var rect = target.getBoundingClientRect();
        h2cOptions.x      = rect.left + window.scrollX;
        h2cOptions.y      = rect.top  + window.scrollY;
        h2cOptions.width  = rect.width;
        h2cOptions.height = rect.height;
      }

      html2canvas(target, h2cOptions)
        .then(function (canvas) {
          setCapturingState(false);
          downloadCanvas(canvas, filename, format, quality);
          if (onDone) {
            canvas.toBlob(function (blob) { onDone(blob, canvas); });
          }
        })
        .catch(function (e) {
          setCapturingState(false);
          console.error('[screenshot.js] Capture failed:', e);
          alert('[screenshot.js] Capture failed: ' + e.message);
        });
    });
  }

  /* ── Wire up any button with id="screenshotBtn" ── */
  function wireDefaultButton() {
    /* Look for the button immediately, and again after DOM ready */
    function tryWire() {
      var btn = document.getElementById('screenshotBtn');
      if (!btn || btn._screenshotWired) return;
      btn._screenshotWired = true;
      btn.addEventListener('click', function () {
        /* Read data-* attributes so the button itself can configure the capture */
        capture({
          filename: btn.dataset.filename || 'screenshot',
          scale:    btn.dataset.scale    ? parseFloat(btn.dataset.scale) : undefined,
          selector: btn.dataset.selector || null,
          format:   btn.dataset.format   || 'png',
          quality:  btn.dataset.quality  ? parseFloat(btn.dataset.quality) : undefined,
          onStart: function () {
            btn.disabled    = true;
            btn.textContent = '📷 Capturing…';
          },
          onDone: function () {
            btn.disabled    = false;
            btn.textContent = btn.dataset.label || '📷 Take Screenshot';
          },
        });
      });

      /* Set friendly default label if button is empty */
      if (!btn.textContent.trim()) {
        btn.textContent = '📷 Take Screenshot';
      }
    }

    tryWire();
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', tryWire);
    }
  }

  /* ── Expose public API ── */
  global.Screenshot = { capture: capture };

  /* ── Auto-wire the default button ── */
  wireDefaultButton();

}(window));
