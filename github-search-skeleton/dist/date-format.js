'use strict';

System.register(['moment'], function (_export, _context) {
  "use strict";

  var moment, DateFormatValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_moment) {
      moment = _moment.default;
    }],
    execute: function () {
      _export('DateFormatValueConverter', DateFormatValueConverter = function () {
        function DateFormatValueConverter() {
          _classCallCheck(this, DateFormatValueConverter);
        }

        DateFormatValueConverter.prototype.toView = function toView(value, format) {
          if (!value) return '';
          return moment(value).format(format);
        };

        return DateFormatValueConverter;
      }());

      _export('DateFormatValueConverter', DateFormatValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGUtZm9ybWF0LmpzIl0sIm5hbWVzIjpbIm1vbWVudCIsIkRhdGVGb3JtYXRWYWx1ZUNvbnZlcnRlciIsInRvVmlldyIsInZhbHVlIiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBT0EsWTs7OzBDQUVNQyx3Qjs7Ozs7MkNBQ1hDLE0sbUJBQU9DLEssRUFBT0MsTSxFQUFRO0FBQ3BCLGNBQUcsQ0FBQ0QsS0FBSixFQUFXLE9BQU8sRUFBUDtBQUNYLGlCQUFPSCxPQUFPRyxLQUFQLEVBQWNDLE1BQWQsQ0FBcUJBLE1BQXJCLENBQVA7QUFDRCxTIiwiZmlsZSI6ImRhdGUtZm9ybWF0LmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
