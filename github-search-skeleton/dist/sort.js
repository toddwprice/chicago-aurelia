'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var _typeof, SortValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };

      _export('SortValueConverter', SortValueConverter = function () {
        function SortValueConverter() {
          _classCallCheck(this, SortValueConverter);
        }

        SortValueConverter.prototype.toView = function toView(array, propertyName, direction) {
          var factor = direction === 'ascending' ? 1 : -1;
          return array.slice(0).sort(function (a, b) {
            console.log('typeof a[propertyName]', _typeof(a[propertyName]));
            if (typeof a[propertyName] === 'string') {
              return a[propertyName].toLowerCase() > b[propertyName].toLowerCase() ? 1 * factor : -1 * factor;
            } else {
              return (a[propertyName] - b[propertyName]) * factor;
            }
          });
        };

        return SortValueConverter;
      }());

      _export('SortValueConverter', SortValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvcnQuanMiXSwibmFtZXMiOlsiU29ydFZhbHVlQ29udmVydGVyIiwidG9WaWV3IiwiYXJyYXkiLCJwcm9wZXJ0eU5hbWUiLCJkaXJlY3Rpb24iLCJmYWN0b3IiLCJzbGljZSIsInNvcnQiLCJhIiwiYiIsImNvbnNvbGUiLCJsb2ciLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBYUEsa0I7Ozs7O3FDQUNYQyxNLG1CQUFPQyxLLEVBQU9DLFksRUFBY0MsUyxFQUFXO0FBQ3JDLGNBQUlDLFNBQVNELGNBQWMsV0FBZCxHQUE0QixDQUE1QixHQUFnQyxDQUFDLENBQTlDO0FBQ0EsaUJBQU9GLE1BQ0pJLEtBREksQ0FDRSxDQURGLEVBRUpDLElBRkksQ0FFQyxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNkQyxvQkFBUUMsR0FBUixDQUFZLHdCQUFaLFVBQTZDSCxFQUFFTCxZQUFGLENBQTdDO0FBQ0EsZ0JBQUksT0FBT0ssRUFBRUwsWUFBRixDQUFQLEtBQTJCLFFBQS9CLEVBQXlDO0FBQ3ZDLHFCQUFRSyxFQUFFTCxZQUFGLEVBQWdCUyxXQUFoQixLQUFnQ0gsRUFBRU4sWUFBRixFQUFnQlMsV0FBaEIsRUFBakMsR0FBa0UsSUFBSVAsTUFBdEUsR0FBK0UsQ0FBQyxDQUFELEdBQUtBLE1BQTNGO0FBQ0QsYUFGRCxNQUdLO0FBQ0gscUJBQU8sQ0FBQ0csRUFBRUwsWUFBRixJQUFrQk0sRUFBRU4sWUFBRixDQUFuQixJQUFzQ0UsTUFBN0M7QUFDRDtBQUNGLFdBVkksQ0FBUDtBQVdELFMiLCJmaWxlIjoic29ydC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
