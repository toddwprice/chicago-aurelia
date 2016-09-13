'use strict';

System.register(['numeral'], function (_export, _context) {
  "use strict";

  var numeral, NumberFormatValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_numeral) {
      numeral = _numeral.default;
    }],
    execute: function () {
      _export('NumberFormatValueConverter', NumberFormatValueConverter = function () {
        function NumberFormatValueConverter() {
          _classCallCheck(this, NumberFormatValueConverter);
        }

        NumberFormatValueConverter.prototype.toView = function toView(value, format) {
          return numeral(value).format(format);
        };

        return NumberFormatValueConverter;
      }());

      _export('NumberFormatValueConverter', NumberFormatValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51bWJlci1mb3JtYXQuanMiXSwibmFtZXMiOlsibnVtZXJhbCIsIk51bWJlckZvcm1hdFZhbHVlQ29udmVydGVyIiwidG9WaWV3IiwidmFsdWUiLCJmb3JtYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPQSxhOzs7NENBRU1DLDBCOzs7Ozs2Q0FDWEMsTSxtQkFBT0MsSyxFQUFPQyxNLEVBQVE7QUFDcEIsaUJBQU9KLFFBQVFHLEtBQVIsRUFBZUMsTUFBZixDQUFzQkEsTUFBdEIsQ0FBUDtBQUNELFMiLCJmaWxlIjoibnVtYmVyLWZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
