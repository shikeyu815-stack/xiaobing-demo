System.register(["./application.js"], function (_export, _context) {
  "use strict";

  var Application, canvas, $p, bcr, application;
  function topLevelImport(url) {
    return System["import"](url);
  }
  return {
    setters: [function (_applicationJs) {
      Application = _applicationJs.Application;
    }],
    execute: function () {
      canvas = document.getElementById('GameCanvas');
      $p = canvas.parentElement;
      bcr = $p.getBoundingClientRect();
      canvas.width = bcr.width;
      canvas.height = bcr.height;
      application = new Application();
      topLevelImport('cc').then(function (engine) {
        return application.init(engine);
      }).then(function () {
        setTimeout(function () { var status = document.getElementById('PreviewStatus'); if (status && status.textContent.indexOf('失败') < 0) status.style.display = 'none'; }, 2000);
        return application.start();
      })["catch"](function (err) {
        window.previewFailure(err);
      });
    }
  };
});
