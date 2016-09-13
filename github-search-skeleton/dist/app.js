'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var App;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('App', App = function () {
        function App() {
          _classCallCheck(this, App);
        }

        App.prototype.configureRouter = function configureRouter(config, router) {
          config.title = 'Chicago Aurelia';
          config.map([{ route: ['', 'search'], name: 'search', moduleId: 'search', nav: true, title: 'Search', settings: { html: '<i class="fa fa-search"></i> Search' } }, { route: ['todos'], name: 'todos', moduleId: 'todos', nav: true, title: 'ToDos', settings: { html: '<i class="fa fa-check"></i> ToDos' } }]);

          this.router = router;
        };

        return App;
      }());

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJjb25maWd1cmVSb3V0ZXIiLCJjb25maWciLCJyb3V0ZXIiLCJ0aXRsZSIsIm1hcCIsInJvdXRlIiwibmFtZSIsIm1vZHVsZUlkIiwibmF2Iiwic2V0dGluZ3MiLCJodG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3FCQUFhQSxHOzs7OztzQkFDWEMsZSw0QkFBZ0JDLE0sRUFBUUMsTSxFQUFRO0FBQzlCRCxpQkFBT0UsS0FBUCxHQUFlLGlCQUFmO0FBQ0FGLGlCQUFPRyxHQUFQLENBQVcsQ0FDVCxFQUFFQyxPQUFPLENBQUMsRUFBRCxFQUFLLFFBQUwsQ0FBVCxFQUF5QkMsTUFBTSxRQUEvQixFQUF5Q0MsVUFBVSxRQUFuRCxFQUE2REMsS0FBSyxJQUFsRSxFQUF3RUwsT0FBTyxRQUEvRSxFQUF5Rk0sVUFBVSxFQUFFQyxNQUFNLHFDQUFSLEVBQW5HLEVBRFMsRUFFVCxFQUFFTCxPQUFPLENBQUMsT0FBRCxDQUFULEVBQW9CQyxNQUFNLE9BQTFCLEVBQW1DQyxVQUFVLE9BQTdDLEVBQXNEQyxLQUFLLElBQTNELEVBQWlFTCxPQUFPLE9BQXhFLEVBQWlGTSxVQUFVLEVBQUVDLE1BQU0sbUNBQVIsRUFBM0YsRUFGUyxDQUFYOztBQUtBLGVBQUtSLE1BQUwsR0FBY0EsTUFBZDtBQUNELFMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
