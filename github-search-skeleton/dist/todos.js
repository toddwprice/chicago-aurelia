'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var Todos;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('Todos', Todos = function () {
        function Todos() {
          _classCallCheck(this, Todos);

          this.todos = [];
          this.todoDescription = "";
        }

        Todos.prototype.attached = function attached() {
          this.todos.push({ description: 'Do something', done: false });
          this.todos.push({ description: 'Do another thing', done: false });
        };

        Todos.prototype.addTodo = function addTodo() {
          if (this.todoDescription) {
            this.todos.push({ description: this.todoDescription, done: false });
            this.todoDescription = '';
          }
        };

        Todos.prototype.removeTodo = function removeTodo(todo) {
          var index = this.todos.indexOf(todo);
          if (index !== -1) {
            this.todos.splice(index, 1);
          }
        };

        return Todos;
      }());

      _export('Todos', Todos);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9zLmpzIl0sIm5hbWVzIjpbIlRvZG9zIiwidG9kb3MiLCJ0b2RvRGVzY3JpcHRpb24iLCJhdHRhY2hlZCIsInB1c2giLCJkZXNjcmlwdGlvbiIsImRvbmUiLCJhZGRUb2RvIiwicmVtb3ZlVG9kbyIsInRvZG8iLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBQWFBLEs7Ozs7ZUFDWEMsSyxHQUFRLEU7ZUFDUkMsZSxHQUFrQixFOzs7d0JBRWxCQyxRLHVCQUFXO0FBQ1QsZUFBS0YsS0FBTCxDQUFXRyxJQUFYLENBQWdCLEVBQUNDLGFBQWEsY0FBZCxFQUE4QkMsTUFBTSxLQUFwQyxFQUFoQjtBQUNBLGVBQUtMLEtBQUwsQ0FBV0csSUFBWCxDQUFnQixFQUFDQyxhQUFhLGtCQUFkLEVBQWtDQyxNQUFNLEtBQXhDLEVBQWhCO0FBQ0QsUzs7d0JBRURDLE8sc0JBQVU7QUFDUixjQUFJLEtBQUtMLGVBQVQsRUFBMEI7QUFDeEIsaUJBQUtELEtBQUwsQ0FBV0csSUFBWCxDQUFnQixFQUFFQyxhQUFhLEtBQUtILGVBQXBCLEVBQXFDSSxNQUFNLEtBQTNDLEVBQWhCO0FBQ0EsaUJBQUtKLGVBQUwsR0FBdUIsRUFBdkI7QUFDRDtBQUNGLFM7O3dCQUVETSxVLHVCQUFXQyxJLEVBQU07QUFDZixjQUFJQyxRQUFRLEtBQUtULEtBQUwsQ0FBV1UsT0FBWCxDQUFtQkYsSUFBbkIsQ0FBWjtBQUNBLGNBQUlDLFVBQVUsQ0FBQyxDQUFmLEVBQWtCO0FBQ2hCLGlCQUFLVCxLQUFMLENBQVdXLE1BQVgsQ0FBa0JGLEtBQWxCLEVBQXlCLENBQXpCO0FBQ0Q7QUFDRixTIiwiZmlsZSI6InRvZG9zLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
