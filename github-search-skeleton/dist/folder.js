'use strict';

System.register(['aurelia-framework', 'aurelia-dialog', './tree-dialog'], function (_export, _context) {
  "use strict";

  var inject, bindable, DialogService, TreeDialog, _dec, _class, _desc, _value, _class2, _descriptor, Folder;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
    }, function (_aureliaDialog) {
      DialogService = _aureliaDialog.DialogService;
    }, function (_treeDialog) {
      TreeDialog = _treeDialog.TreeDialog;
    }],
    execute: function () {
      _export('Folder', Folder = (_dec = inject(DialogService), _dec(_class = (_class2 = function () {
        function Folder(dialogService) {
          _classCallCheck(this, Folder);

          _initDefineProp(this, 'selectedFolder', _descriptor, this);

          this.dialogService = dialogService;
        }

        Folder.prototype.showDialog = function showDialog() {
          var _this = this;

          alert('open');
          this.dialogService.open({ viewModel: TreeDialog, model: this.selectedFolder }).then(function (result) {
            if (!result.wasCancelled) {
              console.log('result', result);
              _this.selectedFolder = result.output;
              console.log('selectedFolder', _this.selectedFolder);
            }
          });
        };

        return Folder;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'selectedFolder', [bindable], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class));

      _export('Folder', Folder);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvbGRlci5qcyJdLCJuYW1lcyI6WyJpbmplY3QiLCJiaW5kYWJsZSIsIkRpYWxvZ1NlcnZpY2UiLCJUcmVlRGlhbG9nIiwiRm9sZGVyIiwiZGlhbG9nU2VydmljZSIsInNob3dEaWFsb2ciLCJhbGVydCIsIm9wZW4iLCJ2aWV3TW9kZWwiLCJtb2RlbCIsInNlbGVjdGVkRm9sZGVyIiwidGhlbiIsInJlc3VsdCIsIndhc0NhbmNlbGxlZCIsImNvbnNvbGUiLCJsb2ciLCJvdXRwdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBUUEsWSxxQkFBQUEsTTtBQUFRQyxjLHFCQUFBQSxROztBQUNSQyxtQixrQkFBQUEsYTs7QUFDQUMsZ0IsZUFBQUEsVTs7O3dCQUdLQyxNLFdBRFpKLE9BQU9FLGFBQVAsQztBQUlDLHdCQUFZRyxhQUFaLEVBQTJCO0FBQUE7O0FBQUE7O0FBQ3pCLGVBQUtBLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0Q7O3lCQUVEQyxVLHlCQUFhO0FBQUE7O0FBQ1hDLGdCQUFNLE1BQU47QUFDQSxlQUFLRixhQUFMLENBQW1CRyxJQUFuQixDQUF3QixFQUFFQyxXQUFXTixVQUFiLEVBQXlCTyxPQUFPLEtBQUtDLGNBQXJDLEVBQXhCLEVBQStFQyxJQUEvRSxDQUFvRixVQUFDQyxNQUFELEVBQVk7QUFDOUYsZ0JBQUksQ0FBQ0EsT0FBT0MsWUFBWixFQUEwQjtBQUN4QkMsc0JBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCSCxNQUF0QjtBQUNBLG9CQUFLRixjQUFMLEdBQXNCRSxPQUFPSSxNQUE3QjtBQUNBRixzQkFBUUMsR0FBUixDQUFZLGdCQUFaLEVBQThCLE1BQUtMLGNBQW5DO0FBQ0Q7QUFDRixXQU5EO0FBT0QsUzs7OzBGQWZBVixRIiwiZmlsZSI6ImZvbGRlci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
