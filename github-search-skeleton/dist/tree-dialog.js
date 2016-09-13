'use strict';

System.register(['aurelia-dialog'], function (_export, _context) {
  "use strict";

  var DialogController, _class, _temp, TreeDialog;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaDialog) {
      DialogController = _aureliaDialog.DialogController;
    }],
    execute: function () {
      _export('TreeDialog', TreeDialog = (_temp = _class = function () {
        function TreeDialog(controller) {
          _classCallCheck(this, TreeDialog);

          this.controller = controller;
          this.controller.settings.lock = false;
        }

        TreeDialog.prototype.activate = function activate(folder) {
          this.folder = folder;
        };

        return TreeDialog;
      }(), _class.inject = [DialogController], _temp));

      _export('TreeDialog', TreeDialog);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZWUtZGlhbG9nLmpzIl0sIm5hbWVzIjpbIkRpYWxvZ0NvbnRyb2xsZXIiLCJUcmVlRGlhbG9nIiwiY29udHJvbGxlciIsInNldHRpbmdzIiwibG9jayIsImFjdGl2YXRlIiwiZm9sZGVyIiwiaW5qZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUUEsc0Isa0JBQUFBLGdCOzs7NEJBRUtDLFU7QUFHWCw0QkFBWUMsVUFBWixFQUF1QjtBQUFBOztBQUNyQixlQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLGVBQUtBLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCQyxJQUF6QixHQUFnQyxLQUFoQztBQUNEOzs2QkFDREMsUSxxQkFBU0MsTSxFQUFPO0FBQ2QsZUFBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0QsUzs7O2tCQVJNQyxNLEdBQVMsQ0FBQ1AsZ0JBQUQsQyIsImZpbGUiOiJ0cmVlLWRpYWxvZy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
