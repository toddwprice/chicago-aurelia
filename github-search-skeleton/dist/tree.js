'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var inject, bindable, _desc, _value, _class, _descriptor, Tree;

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
    }],
    execute: function () {
      _export('Tree', Tree = (_class = function () {
        function Tree() {
          _classCallCheck(this, Tree);

          _initDefineProp(this, 'selectedNode', _descriptor, this);
        }

        Tree.prototype.attached = function attached() {
          this.nodes = [{ id: 1, node_name: 'My Folders', children: [{ id: 2, node_name: 'Work', children: [{ id: 4, node_name: 'Projects', children: [{ id: 10, node_name: 'Area 51', children: [] }, { id: 11, node_name: 'Aquiline', children: [] }, { id: 12, node_name: 'Nutmeg', children: [] }, { id: 13, node_name: 'Dr Freezelove', children: [] }, { id: 14, node_name: 'Operation Morning Light', children: [] }] }, { id: 5, node_name: 'People', children: [] }, { id: 6, node_name: 'Expenses', children: [{ id: 15, node_name: '2016', children: [] }, { id: 16, node_name: '2015', children: [] }, { id: 17, node_name: '2014', children: [] }] }] }, { id: 3, node_name: 'Home', children: [{ id: 7, node_name: 'Taxes', children: [{ id: 18, node_name: '2016', children: [] }, { id: 19, node_name: '2015', children: [] }, { id: 19, node_name: '2014', children: [] }] }, { id: 8, node_name: 'Trips', children: [] }, { id: 9, node_name: 'Receipts', children: [] }] }] }];
        };

        return Tree;
      }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'selectedNode', [bindable], {
        enumerable: true,
        initializer: null
      })), _class));

      _export('Tree', Tree);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZWUuanMiXSwibmFtZXMiOlsiaW5qZWN0IiwiYmluZGFibGUiLCJUcmVlIiwiYXR0YWNoZWQiLCJub2RlcyIsImlkIiwibm9kZV9uYW1lIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBUUEsWSxxQkFBQUEsTTtBQUFRQyxjLHFCQUFBQSxROzs7c0JBRUhDLEk7Ozs7Ozs7dUJBSVhDLFEsdUJBQVc7QUFDVCxlQUFLQyxLQUFMLEdBQWEsQ0FDWCxFQUFFQyxJQUFJLENBQU4sRUFBU0MsV0FBVyxZQUFwQixFQUFrQ0MsVUFBVSxDQUMxQyxFQUFFRixJQUFJLENBQU4sRUFBU0MsV0FBVyxNQUFwQixFQUE0QkMsVUFBVSxDQUNwQyxFQUFFRixJQUFJLENBQU4sRUFBU0MsV0FBVyxVQUFwQixFQUFnQ0MsVUFBVSxDQUN4QyxFQUFFRixJQUFJLEVBQU4sRUFBVUMsV0FBVyxTQUFyQixFQUFnQ0MsVUFBVSxFQUExQyxFQUR3QyxFQUV4QyxFQUFFRixJQUFJLEVBQU4sRUFBVUMsV0FBVyxVQUFyQixFQUFpQ0MsVUFBVSxFQUEzQyxFQUZ3QyxFQUd4QyxFQUFFRixJQUFJLEVBQU4sRUFBVUMsV0FBVyxRQUFyQixFQUErQkMsVUFBVSxFQUF6QyxFQUh3QyxFQUl4QyxFQUFFRixJQUFJLEVBQU4sRUFBVUMsV0FBVyxlQUFyQixFQUFzQ0MsVUFBVSxFQUFoRCxFQUp3QyxFQUt4QyxFQUFFRixJQUFJLEVBQU4sRUFBVUMsV0FBVyx5QkFBckIsRUFBZ0RDLFVBQVUsRUFBMUQsRUFMd0MsQ0FBMUMsRUFEb0MsRUFRcEMsRUFBRUYsSUFBSSxDQUFOLEVBQVNDLFdBQVcsUUFBcEIsRUFBOEJDLFVBQVUsRUFBeEMsRUFSb0MsRUFTcEMsRUFBRUYsSUFBSSxDQUFOLEVBQVNDLFdBQVcsVUFBcEIsRUFBZ0NDLFVBQVUsQ0FDeEMsRUFBRUYsSUFBSSxFQUFOLEVBQVVDLFdBQVcsTUFBckIsRUFBNkJDLFVBQVUsRUFBdkMsRUFEd0MsRUFFeEMsRUFBRUYsSUFBSSxFQUFOLEVBQVVDLFdBQVcsTUFBckIsRUFBNkJDLFVBQVUsRUFBdkMsRUFGd0MsRUFHeEMsRUFBRUYsSUFBSSxFQUFOLEVBQVVDLFdBQVcsTUFBckIsRUFBNkJDLFVBQVUsRUFBdkMsRUFId0MsQ0FBMUMsRUFUb0MsQ0FBdEMsRUFEMEMsRUFnQjFDLEVBQUVGLElBQUksQ0FBTixFQUFTQyxXQUFXLE1BQXBCLEVBQTRCQyxVQUFVLENBQ3BDLEVBQUVGLElBQUksQ0FBTixFQUFTQyxXQUFXLE9BQXBCLEVBQTZCQyxVQUFVLENBQ3JDLEVBQUVGLElBQUksRUFBTixFQUFVQyxXQUFXLE1BQXJCLEVBQTZCQyxVQUFVLEVBQXZDLEVBRHFDLEVBRXJDLEVBQUVGLElBQUksRUFBTixFQUFVQyxXQUFXLE1BQXJCLEVBQTZCQyxVQUFVLEVBQXZDLEVBRnFDLEVBR3JDLEVBQUVGLElBQUksRUFBTixFQUFVQyxXQUFXLE1BQXJCLEVBQTZCQyxVQUFVLEVBQXZDLEVBSHFDLENBQXZDLEVBRG9DLEVBTXBDLEVBQUVGLElBQUksQ0FBTixFQUFTQyxXQUFXLE9BQXBCLEVBQTZCQyxVQUFVLEVBQXZDLEVBTm9DLEVBT3BDLEVBQUVGLElBQUksQ0FBTixFQUFTQyxXQUFXLFVBQXBCLEVBQWdDQyxVQUFVLEVBQTFDLEVBUG9DLENBQXRDLEVBaEIwQyxDQUE1QyxFQURXLENBQWI7QUErQkQsUzs7O3VGQW5DQU4sUSIsImZpbGUiOiJ0cmVlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
