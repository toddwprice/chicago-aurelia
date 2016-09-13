"use strict";

System.register(["aurelia-framework"], function (_export, _context) {
  "use strict";

  var bindable, _createClass, _desc, _value, _class, _descriptor, _descriptor2, TreeNode;

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
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export("TreeNode", TreeNode = (_class = function () {
        function TreeNode() {
          _classCallCheck(this, TreeNode);

          _initDefineProp(this, "node", _descriptor, this);

          _initDefineProp(this, "selectedNode", _descriptor2, this);
        }

        TreeNode.prototype.selectNode = function selectNode() {
          this.selectedNode = this.node;
          console.log(this.selectedNode.id, this.selectedNode.node_name);
        };

        _createClass(TreeNode, [{
          key: "selectedClass",
          get: function get() {
            if (this.selectedNode && this.node.id == this.selectedNode.id) {
              return "selected";
            }
            return "";
          }
        }]);

        return TreeNode;
      }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "node", [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "selectedNode", [bindable], {
        enumerable: true,
        initializer: null
      })), _class));

      _export("TreeNode", TreeNode);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZWUtbm9kZS5qcyJdLCJuYW1lcyI6WyJiaW5kYWJsZSIsIlRyZWVOb2RlIiwic2VsZWN0Tm9kZSIsInNlbGVjdGVkTm9kZSIsIm5vZGUiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJub2RlX25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBUUEsYyxxQkFBQUEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUVLQyxROzs7Ozs7Ozs7MkJBV1hDLFUseUJBQWE7QUFDWCxlQUFLQyxZQUFMLEdBQW9CLEtBQUtDLElBQXpCO0FBQ0FDLGtCQUFRQyxHQUFSLENBQVksS0FBS0gsWUFBTCxDQUFrQkksRUFBOUIsRUFBa0MsS0FBS0osWUFBTCxDQUFrQkssU0FBcEQ7QUFDRCxTOzs7OzhCQVZtQjtBQUNsQixnQkFBSSxLQUFLTCxZQUFMLElBQXFCLEtBQUtDLElBQUwsQ0FBVUcsRUFBVixJQUFnQixLQUFLSixZQUFMLENBQWtCSSxFQUEzRCxFQUErRDtBQUM3RCxxQkFBTyxVQUFQO0FBQ0Q7QUFDRCxtQkFBTyxFQUFQO0FBQ0Q7Ozs7K0VBUkFQLFE7OztzRkFDQUEsUSIsImZpbGUiOiJ0cmVlLW5vZGUuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
