'use strict';

System.register(['aurelia-framework', 'pikaday'], function (_export, _context) {
  "use strict";

  var inject, customAttribute, pikaday, _dec, _dec2, _class, DatePicker;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function createEvent(name) {
    var event = document.createEvent('Event');
    event.initEvent(name, true, true);
    return event;
  }

  function fireEvent(element, name) {
    var event = createEvent(name);
    element.dispatchEvent(event);
  }
  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customAttribute = _aureliaFramework.customAttribute;
    }, function (_pikaday) {
      pikaday = _pikaday.default;
    }],
    execute: function () {
      _export('DatePicker', DatePicker = (_dec = customAttribute('datepicker'), _dec2 = inject(Element), _dec(_class = _dec2(_class = function () {
        function DatePicker(element) {
          _classCallCheck(this, DatePicker);

          this.element = element;
        }

        DatePicker.prototype.attached = function attached() {
          var picker = new pikaday({ field: this.element });
          $(this.element).on('change', function (e) {
            return fireEvent(e.target, 'input');
          });
        };

        DatePicker.prototype.detached = function detached() {
          $(this.element).off('change');
        };

        return DatePicker;
      }()) || _class) || _class));

      _export('DatePicker', DatePicker);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGVwaWNrZXIuanMiXSwibmFtZXMiOlsiY3JlYXRlRXZlbnQiLCJuYW1lIiwiZXZlbnQiLCJkb2N1bWVudCIsImluaXRFdmVudCIsImZpcmVFdmVudCIsImVsZW1lbnQiLCJkaXNwYXRjaEV2ZW50IiwiaW5qZWN0IiwiY3VzdG9tQXR0cmlidXRlIiwicGlrYWRheSIsIkRhdGVQaWNrZXIiLCJFbGVtZW50IiwiYXR0YWNoZWQiLCJwaWNrZXIiLCJmaWVsZCIsIiQiLCJvbiIsImUiLCJ0YXJnZXQiLCJkZXRhY2hlZCIsIm9mZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQXFCQSxXQUFTQSxXQUFULENBQXFCQyxJQUFyQixFQUEyQjtBQUN6QixRQUFJQyxRQUFRQyxTQUFTSCxXQUFULENBQXFCLE9BQXJCLENBQVo7QUFDQUUsVUFBTUUsU0FBTixDQUFnQkgsSUFBaEIsRUFBc0IsSUFBdEIsRUFBNEIsSUFBNUI7QUFDQSxXQUFPQyxLQUFQO0FBQ0Q7O0FBRUQsV0FBU0csU0FBVCxDQUFtQkMsT0FBbkIsRUFBNEJMLElBQTVCLEVBQWtDO0FBQ2hDLFFBQUlDLFFBQVFGLFlBQVlDLElBQVosQ0FBWjtBQUNBSyxZQUFRQyxhQUFSLENBQXNCTCxLQUF0QjtBQUNEOzs7QUE5Qk9NLFkscUJBQUFBLE07QUFBUUMscUIscUJBQUFBLGU7O0FBQ1RDLGE7Ozs0QkFJTUMsVSxXQUZaRixnQkFBZ0IsWUFBaEIsQyxVQUNBRCxPQUFPSSxPQUFQLEM7QUFFQyw0QkFBWU4sT0FBWixFQUFxQjtBQUFBOztBQUNuQixlQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDRDs7NkJBRURPLFEsdUJBQVc7QUFFVCxjQUFJQyxTQUFTLElBQUlKLE9BQUosQ0FBWSxFQUFFSyxPQUFPLEtBQUtULE9BQWQsRUFBWixDQUFiO0FBQ0FVLFlBQUUsS0FBS1YsT0FBUCxFQUFnQlcsRUFBaEIsQ0FBbUIsUUFBbkIsRUFBNkI7QUFBQSxtQkFBS1osVUFBVWEsRUFBRUMsTUFBWixFQUFvQixPQUFwQixDQUFMO0FBQUEsV0FBN0I7QUFDRCxTOzs2QkFFREMsUSx1QkFBVztBQUNUSixZQUFFLEtBQUtWLE9BQVAsRUFBZ0JlLEdBQWhCLENBQW9CLFFBQXBCO0FBQ0QsUyIsImZpbGUiOiJkYXRlcGlja2VyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
