define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      config.title = 'Chicago Aurelia';
      config.map([{ route: ['', 'search'], name: 'search', moduleId: 'search', nav: true, title: 'Search', settings: { html: '<i class="fa fa-search"></i> Search' } }, { route: ['todos'], name: 'todos', moduleId: 'todos', nav: true, title: 'ToDos', settings: { html: '<i class="fa fa-check"></i> ToDos' } }, { route: ['folders'], name: 'folders', moduleId: 'folders', nav: true, title: 'Folders', settings: { html: '<i class="fa fa-folder-open"></i> Folders' } }]);

      this.router = router;
    };

    return App;
  }();
});
define('date-format',['exports', 'moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DateFormatValueConverter = undefined;

  var _moment2 = _interopRequireDefault(_moment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var DateFormatValueConverter = exports.DateFormatValueConverter = function () {
    function DateFormatValueConverter() {
      _classCallCheck(this, DateFormatValueConverter);
    }

    DateFormatValueConverter.prototype.toView = function toView(value, format) {
      if (!value) return '';
      return (0, _moment2.default)(value).format(format);
    };

    return DateFormatValueConverter;
  }();
});
define('datepicker',['exports', 'aurelia-framework', 'pikaday'], function (exports, _aureliaFramework, _pikaday) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DatePicker = undefined;

  var _pikaday2 = _interopRequireDefault(_pikaday);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var DatePicker = exports.DatePicker = (_dec = (0, _aureliaFramework.customAttribute)('datepicker'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec(_class = _dec2(_class = function () {
    function DatePicker(element) {
      _classCallCheck(this, DatePicker);

      this.element = element;
    }

    DatePicker.prototype.attached = function attached() {
      var picker = new _pikaday2.default({ field: this.element });
      $(this.element).on('change', function (e) {
        return fireEvent(e.target, 'input');
      });
    };

    DatePicker.prototype.detached = function detached() {
      $(this.element).off('change');
    };

    return DatePicker;
  }()) || _class) || _class);


  function createEvent(name) {
    var event = document.createEvent('Event');
    event.initEvent(name, true, true);
    return event;
  }

  function fireEvent(element, name) {
    var event = createEvent(name);
    element.dispatchEvent(event);
  }
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('folder',['exports', 'aurelia-framework', 'aurelia-dialog', './tree-dialog'], function (exports, _aureliaFramework, _aureliaDialog, _treeDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Folder = undefined;

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

  var _dec, _class, _desc, _value, _class2, _descriptor;

  var Folder = exports.Folder = (_dec = (0, _aureliaFramework.inject)(_aureliaDialog.DialogService), _dec(_class = (_class2 = function () {
    function Folder(dialogService) {
      _classCallCheck(this, Folder);

      _initDefineProp(this, 'selectedFolder', _descriptor, this);

      this.dialogService = dialogService;
    }

    Folder.prototype.showDialog = function showDialog() {
      var _this = this;

      this.dialogService.open({ viewModel: _treeDialog.TreeDialog, model: this.selectedFolder }).then(function (result) {
        if (!result.wasCancelled) {
          console.log('result', result);
          _this.selectedFolder = result.output;
          console.log('selectedFolder', _this.selectedFolder);
        }
      });
    };

    return Folder;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'selectedFolder', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class);
});
define('folders',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Folders = exports.Folders = function Folders() {
    _classCallCheck(this, Folders);
  };
});
define('main',['exports', './environment', 'bootstrap'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources').plugin('aurelia-dialog', function (settings) {
      settings.lock = false;
      settings.centerHorizontalOnly = true;
      settings.centerVerticalOnly = true;
      settings.startingZIndex = 5;
    });

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('number-format',['exports', 'numeral'], function (exports, _numeral) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.NumberFormatValueConverter = undefined;

  var _numeral2 = _interopRequireDefault(_numeral);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var NumberFormatValueConverter = exports.NumberFormatValueConverter = function () {
    function NumberFormatValueConverter() {
      _classCallCheck(this, NumberFormatValueConverter);
    }

    NumberFormatValueConverter.prototype.toView = function toView(value, format) {
      return (0, _numeral2.default)(value).format(format);
    };

    return NumberFormatValueConverter;
  }();
});
define('search',['exports', 'aurelia-framework', 'aurelia-fetch-client', 'moment', 'fetch'], function (exports, _aureliaFramework, _aureliaFetchClient, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Search = undefined;

  var _moment2 = _interopRequireDefault(_moment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var Search = exports.Search = (_dec = (0, _aureliaFramework.inject)(_aureliaFetchClient.HttpClient), _dec(_class = function () {
    function Search(http) {
      _classCallCheck(this, Search);

      this.searchTerm = 'aurelia';
      this.language = 'javascript';
      this.pushedAfter = '';
      this.sortBy = 'stargazers_count';
      this.sortDirection = 'descending';
      this.repos = [];

      http.configure(function (config) {
        config.useStandardConfiguration().withBaseUrl('https://api.github.com');
      });

      this.http = http;
    }

    Search.prototype.findRepos = function findRepos() {
      var _this = this;

      $('#results').hide();
      var updatedClause = this.pushedAfter ? '+pushed:>' + (0, _moment2.default)(this.pushedAfter).format('YYYY-MM-DD') : '';

      this.searchUrl = '/search/repositories?q=' + this.searchTerm + '+language:' + this.language + updatedClause + '&sort=stars&order&per_page=100';
      return this.http.fetch(this.searchUrl).then(function (response) {
        return response.json();
      }).then(function (repos) {
        return _this.repos = repos.items;
      }).then(function () {
        return $('#results').fadeIn();
      });
    };

    Search.prototype.setSort = function setSort(field, direction) {
      this.sortBy = field;
      this.sortDirection = direction;
      $('table th').removeClass('active');
      $('table th#' + field.replace('.', '_')).addClass('active');
    };

    return Search;
  }()) || _class);
});
define('sort',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var SortValueConverter = exports.SortValueConverter = function () {
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
  }();
});
define('todos',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Todos = exports.Todos = function () {
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
  }();
});
define('tree-dialog',['exports', 'aurelia-dialog'], function (exports, _aureliaDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TreeDialog = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _class, _temp;

  var TreeDialog = exports.TreeDialog = (_temp = _class = function () {
    function TreeDialog(controller) {
      _classCallCheck(this, TreeDialog);

      this.controller = controller;
      this.controller.settings.lock = false;
    }

    TreeDialog.prototype.activate = function activate(folder) {
      this.folder = folder;
    };

    return TreeDialog;
  }(), _class.inject = [_aureliaDialog.DialogController], _temp);
});
define('tree-node',["exports", "aurelia-framework"], function (exports, _aureliaFramework) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TreeNode = undefined;

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

  var _createClass = function () {
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

  var _desc, _value, _class, _descriptor, _descriptor2;

  var TreeNode = exports.TreeNode = (_class = function () {
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
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "node", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "selectedNode", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class);
});
define('tree',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Tree = undefined;

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

  var _desc, _value, _class, _descriptor;

  var Tree = exports.Tree = (_class = function () {
    function Tree() {
      _classCallCheck(this, Tree);

      _initDefineProp(this, 'selectedNode', _descriptor, this);
    }

    Tree.prototype.attached = function attached() {
      this.nodes = [{ id: 1, node_name: 'My Folders', children: [{ id: 2, node_name: 'Work', children: [{ id: 4, node_name: 'Projects', children: [{ id: 10, node_name: 'Area 51', children: [] }, { id: 11, node_name: 'Aquiline', children: [] }, { id: 12, node_name: 'Nutmeg', children: [] }, { id: 13, node_name: 'Dr Freezelove', children: [] }, { id: 14, node_name: 'Operation Morning Light', children: [] }] }, { id: 5, node_name: 'People', children: [] }, { id: 6, node_name: 'Expenses', children: [{ id: 15, node_name: '2016', children: [] }, { id: 16, node_name: '2015', children: [] }, { id: 17, node_name: '2014', children: [] }] }] }, { id: 3, node_name: 'Home', children: [{ id: 7, node_name: 'Taxes', children: [{ id: 18, node_name: '2016', children: [] }, { id: 19, node_name: '2015', children: [] }, { id: 19, node_name: '2014', children: [] }] }, { id: 8, node_name: 'Trips', children: [] }, { id: 9, node_name: 'Receipts', children: [] }] }] }];
    };

    return Tree;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'selectedNode', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class);
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('resources/elements/my-textbox',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MyTextbox = undefined;

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

  var _desc, _value, _class, _descriptor;

  var MyTextbox = exports.MyTextbox = (_class = function () {
    function MyTextbox() {
      _classCallCheck(this, MyTextbox);

      _initDefineProp(this, 'value', _descriptor, this);
    }

    MyTextbox.prototype.valueChanged = function valueChanged(newValue, oldValue) {};

    return MyTextbox;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'value', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class);
});
define('aurelia-dialog/ai-dialog',['require','exports','module','aurelia-templating'],function (require, exports, module) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AiDialog = undefined;

var _dec, _dec2, _class;

var _aureliaTemplating = require('aurelia-templating');



var AiDialog = exports.AiDialog = (_dec = (0, _aureliaTemplating.customElement)('ai-dialog'), _dec2 = (0, _aureliaTemplating.inlineView)('\n  <template>\n    <slot></slot>\n  </template>\n'), _dec(_class = _dec2(_class = function AiDialog() {
  
}) || _class) || _class);
});

define('aurelia-dialog/ai-dialog-header',['require','exports','module','aurelia-templating','./dialog-controller'],function (require, exports, module) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AiDialogHeader = undefined;

var _dec, _dec2, _class, _class2, _temp;

var _aureliaTemplating = require('aurelia-templating');

var _dialogController = require('./dialog-controller');



var AiDialogHeader = exports.AiDialogHeader = (_dec = (0, _aureliaTemplating.customElement)('ai-dialog-header'), _dec2 = (0, _aureliaTemplating.inlineView)('\n  <template>\n    <button type="button" class="dialog-close" aria-label="Close" if.bind="!controller.settings.lock" click.trigger="controller.cancel()">\n      <span aria-hidden="true">&times;</span>\n    </button>\n\n    <div class="dialog-header-content">\n      <slot></slot>\n    </div>\n  </template>\n'), _dec(_class = _dec2(_class = (_temp = _class2 = function AiDialogHeader(controller) {
  

  this.controller = controller;
}, _class2.inject = [_dialogController.DialogController], _temp)) || _class) || _class);
});

define('aurelia-dialog/dialog-controller',['require','exports','module','./lifecycle','./dialog-result'],function (require, exports, module) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DialogController = undefined;

var _lifecycle = require('./lifecycle');

var _dialogResult = require('./dialog-result');



var DialogController = exports.DialogController = function () {
  function DialogController(renderer, settings, resolve, reject) {
    

    this.renderer = renderer;
    this.settings = settings;
    this._resolve = resolve;
    this._reject = reject;
  }

  DialogController.prototype.ok = function ok(output) {
    return this.close(true, output);
  };

  DialogController.prototype.cancel = function cancel(output) {
    return this.close(false, output);
  };

  DialogController.prototype.error = function error(message) {
    var _this = this;

    return (0, _lifecycle.invokeLifecycle)(this.viewModel, 'deactivate').then(function () {
      return _this.renderer.hideDialog(_this);
    }).then(function () {
      _this.controller.unbind();
      _this._reject(message);
    });
  };

  DialogController.prototype.close = function close(ok, output) {
    var _this2 = this;

    if (this._closePromise) return this._closePromise;

    this._closePromise = (0, _lifecycle.invokeLifecycle)(this.viewModel, 'canDeactivate').then(function (canDeactivate) {
      if (canDeactivate) {
        return (0, _lifecycle.invokeLifecycle)(_this2.viewModel, 'deactivate').then(function () {
          return _this2.renderer.hideDialog(_this2);
        }).then(function () {
          var result = new _dialogResult.DialogResult(!ok, output);
          _this2.controller.unbind();
          _this2._resolve(result);
          return result;
        });
      }

      return Promise.resolve();
    });

    return this._closePromise;
  };

  return DialogController;
}();
});

define('aurelia-dialog/lifecycle',['require','exports','module'],function (require, exports, module) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invokeLifecycle = invokeLifecycle;
function invokeLifecycle(instance, name, model) {
  if (typeof instance[name] === 'function') {
    var result = instance[name](model);

    if (result instanceof Promise) {
      return result;
    }

    if (result !== null && result !== undefined) {
      return Promise.resolve(result);
    }

    return Promise.resolve(true);
  }

  return Promise.resolve(true);
}
});

define('aurelia-dialog/dialog-result',['require','exports','module'],function (require, exports, module) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});



var DialogResult = exports.DialogResult = function DialogResult(cancelled, output) {
  

  this.wasCancelled = false;

  this.wasCancelled = cancelled;
  this.output = output;
};
});

define('aurelia-dialog/ai-dialog-body',['require','exports','module','aurelia-templating'],function (require, exports, module) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AiDialogBody = undefined;

var _dec, _dec2, _class;

var _aureliaTemplating = require('aurelia-templating');



var AiDialogBody = exports.AiDialogBody = (_dec = (0, _aureliaTemplating.customElement)('ai-dialog-body'), _dec2 = (0, _aureliaTemplating.inlineView)('\n  <template>\n    <slot></slot>\n  </template>\n'), _dec(_class = _dec2(_class = function AiDialogBody() {
  
}) || _class) || _class);
});

define('aurelia-dialog/ai-dialog-footer',['require','exports','module','aurelia-templating','./dialog-controller'],function (require, exports, module) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AiDialogFooter = undefined;

var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _class3, _temp;

var _aureliaTemplating = require('aurelia-templating');

var _dialogController = require('./dialog-controller');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
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

var AiDialogFooter = exports.AiDialogFooter = (_dec = (0, _aureliaTemplating.customElement)('ai-dialog-footer'), _dec2 = (0, _aureliaTemplating.inlineView)('\n  <template>\n    <slot></slot>\n\n    <template if.bind="buttons.length > 0">\n      <button type="button" class="btn btn-default" repeat.for="button of buttons" click.trigger="close(button)">${button}</button>\n    </template>\n  </template>\n'), _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = function () {
  function AiDialogFooter(controller) {
    

    _initDefineProp(this, 'buttons', _descriptor, this);

    _initDefineProp(this, 'useDefaultButtons', _descriptor2, this);

    this.controller = controller;
  }

  AiDialogFooter.prototype.close = function close(buttonValue) {
    if (AiDialogFooter.isCancelButton(buttonValue)) {
      this.controller.cancel(buttonValue);
    } else {
      this.controller.ok(buttonValue);
    }
  };

  AiDialogFooter.prototype.useDefaultButtonsChanged = function useDefaultButtonsChanged(newValue) {
    if (newValue) {
      this.buttons = ['Cancel', 'Ok'];
    }
  };

  AiDialogFooter.isCancelButton = function isCancelButton(value) {
    return value === 'Cancel';
  };

  return AiDialogFooter;
}(), _class3.inject = [_dialogController.DialogController], _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'buttons', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'useDefaultButtons', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class2)) || _class) || _class);
});

define('aurelia-dialog/attach-focus',['require','exports','module','aurelia-templating'],function (require, exports, module) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttachFocus = undefined;

var _dec, _class, _class2, _temp;

var _aureliaTemplating = require('aurelia-templating');



var AttachFocus = exports.AttachFocus = (_dec = (0, _aureliaTemplating.customAttribute)('attach-focus'), _dec(_class = (_temp = _class2 = function () {
  function AttachFocus(element) {
    

    this.value = true;

    this.element = element;
  }

  AttachFocus.prototype.attached = function attached() {
    if (this.value && this.value !== 'false') {
      this.element.focus();
    }
  };

  AttachFocus.prototype.valueChanged = function valueChanged(newValue) {
    this.value = newValue;
  };

  return AttachFocus;
}(), _class2.inject = [Element], _temp)) || _class);
});

define('aurelia-dialog/dialog-configuration',['require','exports','module','./renderer','./dialog-renderer','./dialog-options','aurelia-pal'],function (require, exports, module) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DialogConfiguration = undefined;

var _renderer = require('./renderer');

var _dialogRenderer = require('./dialog-renderer');

var _dialogOptions = require('./dialog-options');

var _aureliaPal = require('aurelia-pal');



var defaultRenderer = _dialogRenderer.DialogRenderer;

var resources = {
  'ai-dialog': './ai-dialog',
  'ai-dialog-header': './ai-dialog-header',
  'ai-dialog-body': './ai-dialog-body',
  'ai-dialog-footer': './ai-dialog-footer',
  'attach-focus': './attach-focus'
};

var defaultCSSText = 'ai-dialog-container,ai-dialog-overlay{position:fixed;top:0;right:0;bottom:0;left:0}ai-dialog,ai-dialog-container>div>div{min-width:300px;margin:auto;display:block}ai-dialog-overlay{opacity:0}ai-dialog-overlay.active{opacity:1}ai-dialog-container{display:block;transition:opacity .2s linear;opacity:0;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}ai-dialog-container.active{opacity:1}ai-dialog-container>div{padding:30px}ai-dialog-container>div>div{width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content}ai-dialog-container,ai-dialog-container>div,ai-dialog-container>div>div{outline:0}ai-dialog{box-shadow:0 5px 15px rgba(0,0,0,.5);border:1px solid rgba(0,0,0,.2);border-radius:5px;padding:3;width:-moz-fit-content;width:-webkit-fit-content;width:fit-content;height:-moz-fit-content;height:-webkit-fit-content;height:fit-content;border-image-source:initial;border-image-slice:initial;border-image-width:initial;border-image-outset:initial;border-image-repeat:initial;background:#fff}ai-dialog>ai-dialog-header{display:block;padding:16px;border-bottom:1px solid #e5e5e5}ai-dialog>ai-dialog-header>button{float:right;border:none;display:block;width:32px;height:32px;background:0 0;font-size:22px;line-height:16px;margin:-14px -16px 0 0;padding:0;cursor:pointer}ai-dialog>ai-dialog-body{display:block;padding:16px}ai-dialog>ai-dialog-footer{display:block;padding:6px;border-top:1px solid #e5e5e5;text-align:right}ai-dialog>ai-dialog-footer button{color:#333;background-color:#fff;padding:6px 12px;font-size:14px;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid #ccc;border-radius:4px;margin:5px 0 5px 5px}ai-dialog>ai-dialog-footer button:disabled{cursor:default;opacity:.45}ai-dialog>ai-dialog-footer button:hover:enabled{color:#333;background-color:#e6e6e6;border-color:#adadad}.ai-dialog-open{overflow:hidden}';

var DialogConfiguration = exports.DialogConfiguration = function () {
  function DialogConfiguration(aurelia) {
    

    this.aurelia = aurelia;
    this.settings = _dialogOptions.dialogOptions;
    this.resources = [];
    this.cssText = defaultCSSText;
    this.renderer = defaultRenderer;
  }

  DialogConfiguration.prototype.useDefaults = function useDefaults() {
    return this.useRenderer(defaultRenderer).useCSS(defaultCSSText).useStandardResources();
  };

  DialogConfiguration.prototype.useStandardResources = function useStandardResources() {
    return this.useResource('ai-dialog').useResource('ai-dialog-header').useResource('ai-dialog-body').useResource('ai-dialog-footer').useResource('attach-focus');
  };

  DialogConfiguration.prototype.useResource = function useResource(resourceName) {
    this.resources.push(resourceName);
    return this;
  };

  DialogConfiguration.prototype.useRenderer = function useRenderer(renderer, settings) {
    this.renderer = renderer;
    this.settings = Object.assign(this.settings, settings || {});
    return this;
  };

  DialogConfiguration.prototype.useCSS = function useCSS(cssText) {
    this.cssText = cssText;
    return this;
  };

  DialogConfiguration.prototype._apply = function _apply() {
    var _this = this;

    this.aurelia.transient(_renderer.Renderer, this.renderer);
    this.resources.forEach(function (resourceName) {
      return _this.aurelia.globalResources(resources[resourceName]);
    });

    if (this.cssText) {
      _aureliaPal.DOM.injectStyles(this.cssText);
    }
  };

  return DialogConfiguration;
}();
});

define('aurelia-dialog/renderer',['require','exports','module'],function (require, exports, module) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



var Renderer = exports.Renderer = function () {
  function Renderer() {
    
  }

  Renderer.prototype.getDialogContainer = function getDialogContainer() {
    throw new Error('DialogRenderer must implement getDialogContainer().');
  };

  Renderer.prototype.showDialog = function showDialog(dialogController) {
    throw new Error('DialogRenderer must implement showDialog().');
  };

  Renderer.prototype.hideDialog = function hideDialog(dialogController) {
    throw new Error('DialogRenderer must implement hideDialog().');
  };

  return Renderer;
}();
});

define('aurelia-dialog/dialog-renderer',['require','exports','module','./dialog-options','aurelia-pal','aurelia-dependency-injection'],function (require, exports, module) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DialogRenderer = undefined;

var _dec, _class;

var _dialogOptions = require('./dialog-options');

var _aureliaPal = require('aurelia-pal');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');



var containerTagName = 'ai-dialog-container';
var overlayTagName = 'ai-dialog-overlay';
var transitionEvent = function () {
  var transition = null;

  return function () {
    if (transition) return transition;

    var t = void 0;
    var el = _aureliaPal.DOM.createElement('fakeelement');
    var transitions = {
      'transition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'MozTransition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd'
    };
    for (t in transitions) {
      if (el.style[t] !== undefined) {
        transition = transitions[t];
        return transition;
      }
    }
  };
}();

var DialogRenderer = exports.DialogRenderer = (_dec = (0, _aureliaDependencyInjection.transient)(), _dec(_class = function () {
  function DialogRenderer() {
    var _this = this;

    

    this.dialogControllers = [];

    this.escapeKeyEvent = function (e) {
      if (e.keyCode === 27) {
        var top = _this.dialogControllers[_this.dialogControllers.length - 1];
        if (top && top.settings.lock !== true) {
          top.cancel();
        }
      }
    };

    this.defaultSettings = _dialogOptions.dialogOptions;
  }

  DialogRenderer.prototype.getDialogContainer = function getDialogContainer() {
    return _aureliaPal.DOM.createElement('div');
  };

  DialogRenderer.prototype.showDialog = function showDialog(dialogController) {
    var _this2 = this;

    var settings = Object.assign({}, this.defaultSettings, dialogController.settings);
    var body = _aureliaPal.DOM.querySelectorAll('body')[0];
    var wrapper = document.createElement('div');

    this.modalOverlay = _aureliaPal.DOM.createElement(overlayTagName);
    this.modalContainer = _aureliaPal.DOM.createElement(containerTagName);
    this.anchor = dialogController.slot.anchor;
    wrapper.appendChild(this.anchor);
    this.modalContainer.appendChild(wrapper);

    this.stopPropagation = function (e) {
      e._aureliaDialogHostClicked = true;
    };
    this.closeModalClick = function (e) {
      if (!settings.lock && !e._aureliaDialogHostClicked) {
        dialogController.cancel();
      } else {
        return false;
      }
    };

    dialogController.centerDialog = function () {
      if (settings.centerHorizontalOnly) return;
      centerDialog(_this2.modalContainer);
    };

    this.modalOverlay.style.zIndex = this.defaultSettings.startingZIndex;
    this.modalContainer.style.zIndex = this.defaultSettings.startingZIndex;

    var lastContainer = Array.from(body.querySelectorAll(containerTagName)).pop();

    if (lastContainer) {
      lastContainer.parentNode.insertBefore(this.modalContainer, lastContainer.nextSibling);
      lastContainer.parentNode.insertBefore(this.modalOverlay, lastContainer.nextSibling);
    } else {
      body.insertBefore(this.modalContainer, body.firstChild);
      body.insertBefore(this.modalOverlay, body.firstChild);
    }

    if (!this.dialogControllers.length) {
      _aureliaPal.DOM.addEventListener('keyup', this.escapeKeyEvent);
    }

    this.dialogControllers.push(dialogController);

    dialogController.slot.attached();

    if (typeof settings.position === 'function') {
      settings.position(this.modalContainer, this.modalOverlay);
    } else {
      dialogController.centerDialog();
    }

    this.modalContainer.addEventListener('click', this.closeModalClick);
    this.anchor.addEventListener('click', this.stopPropagation);

    return new Promise(function (resolve) {
      var renderer = _this2;
      if (settings.ignoreTransitions) {
        resolve();
      } else {
        _this2.modalContainer.addEventListener(transitionEvent(), onTransitionEnd);
      }

      _this2.modalOverlay.classList.add('active');
      _this2.modalContainer.classList.add('active');
      body.classList.add('ai-dialog-open');

      function onTransitionEnd(e) {
        if (e.target !== renderer.modalContainer) {
          return;
        }
        renderer.modalContainer.removeEventListener(transitionEvent(), onTransitionEnd);
        resolve();
      }
    });
  };

  DialogRenderer.prototype.hideDialog = function hideDialog(dialogController) {
    var _this3 = this;

    var settings = Object.assign({}, this.defaultSettings, dialogController.settings);
    var body = _aureliaPal.DOM.querySelectorAll('body')[0];

    this.modalContainer.removeEventListener('click', this.closeModalClick);
    this.anchor.removeEventListener('click', this.stopPropagation);

    var i = this.dialogControllers.indexOf(dialogController);
    if (i !== -1) {
      this.dialogControllers.splice(i, 1);
    }

    if (!this.dialogControllers.length) {
      _aureliaPal.DOM.removeEventListener('keyup', this.escapeKeyEvent);
    }

    return new Promise(function (resolve) {
      var renderer = _this3;
      if (settings.ignoreTransitions) {
        resolve();
      } else {
        _this3.modalContainer.addEventListener(transitionEvent(), onTransitionEnd);
      }

      _this3.modalOverlay.classList.remove('active');
      _this3.modalContainer.classList.remove('active');

      function onTransitionEnd() {
        renderer.modalContainer.removeEventListener(transitionEvent(), onTransitionEnd);
        resolve();
      }
    }).then(function () {
      body.removeChild(_this3.modalOverlay);
      body.removeChild(_this3.modalContainer);
      dialogController.slot.detached();

      if (!_this3.dialogControllers.length) {
        body.classList.remove('ai-dialog-open');
      }

      return Promise.resolve();
    });
  };

  return DialogRenderer;
}()) || _class);


function centerDialog(modalContainer) {
  var child = modalContainer.children[0];
  var vh = Math.max(_aureliaPal.DOM.querySelectorAll('html')[0].clientHeight, window.innerHeight || 0);

  child.style.marginTop = Math.max((vh - child.offsetHeight) / 2, 30) + 'px';
  child.style.marginBottom = Math.max((vh - child.offsetHeight) / 2, 30) + 'px';
}
});

define('aurelia-dialog/dialog-options',['require','exports','module'],function (require, exports, module) {"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var dialogOptions = exports.dialogOptions = {
  lock: true,
  centerHorizontalOnly: false,
  startingZIndex: 1000,
  ignoreTransitions: false
};
});

define('aurelia-dialog/dialog-service',['require','exports','module','aurelia-metadata','aurelia-dependency-injection','aurelia-templating','./dialog-controller','./renderer','./lifecycle','./dialog-result'],function (require, exports, module) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DialogService = undefined;

var _class, _temp;

var _aureliaMetadata = require('aurelia-metadata');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _dialogController = require('./dialog-controller');

var _renderer = require('./renderer');

var _lifecycle = require('./lifecycle');

var _dialogResult = require('./dialog-result');



var DialogService = exports.DialogService = (_temp = _class = function () {
  function DialogService(container, compositionEngine) {
    

    this.container = container;
    this.compositionEngine = compositionEngine;
    this.controllers = [];
    this.hasActiveDialog = false;
  }

  DialogService.prototype.open = function open(settings) {
    var _this = this;

    var dialogController = void 0;

    var promise = new Promise(function (resolve, reject) {
      var childContainer = _this.container.createChild();
      dialogController = new _dialogController.DialogController(childContainer.get(_renderer.Renderer), settings, resolve, reject);
      childContainer.registerInstance(_dialogController.DialogController, dialogController);
      return _openDialog(_this, childContainer, dialogController);
    });

    return promise.then(function (result) {
      var i = _this.controllers.indexOf(dialogController);
      if (i !== -1) {
        _this.controllers.splice(i, 1);
        _this.hasActiveDialog = !!_this.controllers.length;
      }

      return result;
    });
  };

  DialogService.prototype.openAndYieldController = function openAndYieldController(settings) {
    var _this2 = this;

    var childContainer = this.container.createChild();
    var dialogController = new _dialogController.DialogController(childContainer.get(_renderer.Renderer), settings, null, null);
    childContainer.registerInstance(_dialogController.DialogController, dialogController);

    dialogController.result = new Promise(function (resolve, reject) {
      dialogController._resolve = resolve;
      dialogController._reject = reject;
    }).then(function (result) {
      var i = _this2.controllers.indexOf(dialogController);
      if (i !== -1) {
        _this2.controllers.splice(i, 1);
        _this2.hasActiveDialog = !!_this2.controllers.length;
      }
      return result;
    });

    return _openDialog(this, childContainer, dialogController).then(function () {
      return dialogController;
    });
  };

  return DialogService;
}(), _class.inject = [_aureliaDependencyInjection.Container, _aureliaTemplating.CompositionEngine], _temp);


function _openDialog(service, childContainer, dialogController) {
  var host = dialogController.renderer.getDialogContainer();
  var instruction = {
    container: service.container,
    childContainer: childContainer,
    model: dialogController.settings.model,
    view: dialogController.settings.view,
    viewModel: dialogController.settings.viewModel,
    viewSlot: new _aureliaTemplating.ViewSlot(host, true),
    host: host
  };

  return _getViewModel(instruction, service.compositionEngine).then(function (returnedInstruction) {
    dialogController.viewModel = returnedInstruction.viewModel;
    dialogController.slot = returnedInstruction.viewSlot;

    return (0, _lifecycle.invokeLifecycle)(dialogController.viewModel, 'canActivate', dialogController.settings.model).then(function (canActivate) {
      if (canActivate) {
        service.controllers.push(dialogController);
        service.hasActiveDialog = !!service.controllers.length;

        return service.compositionEngine.compose(returnedInstruction).then(function (controller) {
          dialogController.controller = controller;
          dialogController.view = controller.view;

          return dialogController.renderer.showDialog(dialogController);
        });
      }
    });
  });
}

function _getViewModel(instruction, compositionEngine) {
  if (typeof instruction.viewModel === 'function') {
    instruction.viewModel = _aureliaMetadata.Origin.get(instruction.viewModel).moduleId;
  }

  if (typeof instruction.viewModel === 'string') {
    return compositionEngine.ensureViewModel(instruction);
  }

  return Promise.resolve(instruction);
}
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"nav-bar.html\"></require>\n  <require from=\"./app.css\"></require>\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\n  <require from=\"font-awesome/css/font-awesome.css\"></require>\n  <require from=\"pikaday/css/pikaday.css\"></require>\n\n  <nav-bar router.bind=\"router\"></nav-bar>\n\n  <div class=\"page-host\">\n    <router-view></router-view>\n  </div>\n</template>\n"; });
define('text!app.css', ['module'], function(module) { module.exports = "@charset \"UTF-8\";\nbody {\n  margin: 0; }\n\n.splash {\n  text-align: center;\n  margin: 10% 0 0 0;\n  box-sizing: border-box; }\n\n.splash .message {\n  font-size: 32px;\n  line-height: 32px;\n  text-shadow: rgba(0, 0, 0, 0.5) 0 0 15px;\n  text-transform: uppercase;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n\n.splash .fa-spinner {\n  text-align: center;\n  display: inline-block;\n  font-size: 72px;\n  margin-top: 50px; }\n\n.page-host {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50px;\n  bottom: 0;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n@media print {\n  .page-host {\n    position: absolute;\n    left: 10px;\n    right: 0;\n    top: 50px;\n    bottom: 0;\n    overflow-y: inherit;\n    overflow-x: inherit; } }\n\nsection {\n  margin: 0 20px; }\n\n.navbar-nav li.loader {\n  margin: 12px 24px 0 6px; }\n\n.pictureDetail {\n  max-width: 425px; }\n\n/* animate page transitions */\nsection.au-enter-active {\n  -webkit-animation: fadeInRight 1s;\n  animation: fadeInRight 1s; }\n\ndiv.au-stagger {\n  /* 50ms will be applied between each successive enter operation */\n  -webkit-animation-delay: 50ms;\n  animation-delay: 50ms; }\n\n.card-container.au-enter {\n  opacity: 0; }\n\n.card-container.au-enter-active {\n  -webkit-animation: fadeIn 2s;\n  animation: fadeIn 2s; }\n\n.card {\n  overflow: hidden;\n  position: relative;\n  border: 1px solid #CCC;\n  border-radius: 8px;\n  text-align: center;\n  padding: 0;\n  background-color: #337ab7;\n  color: #88acd9;\n  margin-bottom: 32px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); }\n\n.card .content {\n  margin-top: 10px; }\n\n.card .content .name {\n  color: white;\n  text-shadow: 0 0 6px rgba(0, 0, 0, 0.5);\n  font-size: 18px; }\n\n.card .header-bg {\n  /* This stretches the canvas across the entire hero unit */\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 70px;\n  border-bottom: 1px #FFF solid;\n  border-radius: 6px 6px 0 0; }\n\n.card .avatar {\n  position: relative;\n  margin-top: 15px;\n  z-index: 100; }\n\n.card .avatar img {\n  width: 100px;\n  height: 100px;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  border-radius: 50%;\n  border: 2px #FFF solid; }\n\n/* animation definitions */\n@-webkit-keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none; } }\n\n@keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n    -ms-transform: translate3d(100%, 0, 0);\n    transform: translate3d(100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    -ms-transform: none;\n    transform: none; } }\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\ntree-node .children {\n  margin-left: 20px; }\n\ntree-node .node-name {\n  display: inline-block;\n  cursor: pointer;\n  padding: 3px 30px 3px 10px; }\n\ntree-node .node-name:hover {\n  background-color: #ddd; }\n\ntree-node .node-name.selected {\n  background-color: #eee;\n  padding: 2px 29px 2px 9px;\n  border: solid 1px #ccc; }\n\n/* CSS spinner */\n@keyframes spinner {\n  to {\n    transform: rotate(360deg); } }\n\n@-webkit-keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg); } }\n\n.spinner {\n  min-width: 24px;\n  min-height: 24px; }\n\n.spinner:before {\n  content: 'Loading…';\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  margin-top: 7px;\n  margin-left: 3px; }\n\n.spinner:not(:required):before {\n  content: '';\n  border-radius: 50%;\n  border: 2px solid rgba(0, 0, 0, 0.3);\n  border-top-color: rgba(0, 0, 0, 0.6);\n  animation: spinner .6s linear infinite;\n  -webkit-animation: spinner .6s linear infinite; }\n\nai-dialog-overlay.active {\n  opacity: 0.85 !important;\n  background-color: #fff; }\n\nai-dialog {\n  margin-top: 100px !important; }\n"; });
define('text!folder.html', ['module'], function(module) { module.exports = "<template>\n  <input type=\"text\" readonly value.bind=\"selectedFolder.node_name\" style=\"width:450px;\" />\n  <span click.trigger=\"showDialog()\" style=\"cursor: pointer;\">\n    <i class=\"fa fa-folder-open\"></i>\n  </span>\n</template>"; });
define('text!folders.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./folder\"></require>\n\n  <section>\n    <h2>Select Folder</h2>\n    <folder></folder>\n  </section>\n</template>"; });
define('text!nav-bar.html', ['module'], function(module) { module.exports = "<template bindable=\"router\">\n  <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#skeleton-navigation-navbar-collapse\">\n        <span class=\"sr-only\">Toggle Navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">\n        <i class=\"fa fa-home\"></i>\n        <span>${router.title}</span>\n      </a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"skeleton-navigation-navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\">\n          <a data-toggle=\"collapse\" data-target=\"#skeleton-navigation-navbar-collapse.in\" href.bind=\"row.href\" innerHTML.bind=\"row.settings.html\"></a>\n        </li>\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"loader\" if.bind=\"router.isNavigating\">\n          <i class=\"fa fa-spinner fa-spin fa-2x\"></i>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</template>\n"; });
define('text!search.html', ['module'], function(module) { module.exports = "<template>\n  <style>\n    th a, th a:focus, th a:hover { color: inherit; text-decoration: none;}\n    th i { visibility: hidden; }\n    th.active i { visibility: visible; margin-left: 4px; color: #E02284; }\n  </style>\n\n  <require from=\"./date-format\"></require>\n  <require from=\"./datepicker\"></require>\n  <require from=\"./sort\"></require>\n\n  <section class=\"au-animate\">\n    <h2>Search GitHub Repos</h2>\n\n    <form submit.delegate=\"findRepos()\">\n\n      <input type=\"text\" placeholder=\"search term\" value.bind=\"searchTerm\" />\n      <input type=\"text\" datepicker value.bind=\"pushedAfter\" placeholder=\"pushed after\" />\n      <button class=\"btn btn-default\" type=\"submit\">Find Repos</button>\n      <span if.bind=\"repos.length\" style=\"padding-left:15px;\">${repos.length} repos found</span>\n\n      <table id=\"results\" class=\"table table-bordered table-hover\" style=\"margin-top:30px;display:none;\">\n        <thead>\n          <tr>\n            <th id=\"owner_login\"><a click.trigger=\"setSort('owner.login','ascending')\" href=\"#\">Owner</a><i class=\"fa fa-long-arrow-up\"></i></th>\n            <th id=\"full_name\"><a click.trigger=\"setSort('full_name','ascending')\" href=\"#\">Name</a><i class=\"fa fa-long-arrow-up\"></i></th>\n            <th>Description</th>\n            <th id=\"stargazers_count\" class=\"active\"><a click.trigger=\"setSort('stargazers_count','descending')\" href=\"#\">Stars</a><i class=\"fa fa-long-arrow-down\"></i></th>\n            <th id=\"created_at\"><a click.trigger=\"setSort('created_at','descending')\" href=\"#\">Created at</a><i class=\"fa fa-long-arrow-down\"></i></th>\n            <th id=\"pushed_at\"><a click.trigger=\"setSort('pushed_at','descending')\" href=\"#\">Pushed at</a><i class=\"fa fa-long-arrow-down\"></i></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr repeat.for=\"row of repos | sort:sortBy:sortDirection\">\n            <td>\n              <a href.bind=\"row.owner.html_url\">${row.owner.login}</a><br/>\n              <img src.bind=\"row.owner.avatar_url\" alt=\"avatar\" style=\"max-height:30px\" />\n            </td>\n            <td><a href.bind=\"row.html_url\" target=\"_blank\">${row.full_name}</a></td>\n            <td>${row.description}</td>\n            <td>${row.stargazers_count}</td>\n            <td>${row.created_at | dateFormat:'YYYY-MM-DD'}</td>\n            <td>${row.pushed_at | dateFormat:'YYYY-MM-DD'}</td>\n          </tr>\n        </tbody>\n      </table>\n\n    </form>\n  </section>\n</template>\n"; });
define('text!todos.html', ['module'], function(module) { module.exports = "<template>\n  <section>\n    <h2><i class=\"fa fa-check\"></i> ToDos</h2>\n\n    <div repeat.for=\"item of todos\">\n      <input type=\"checkbox\" checked.bind=\"item.done\">\n      <span css=\"text-decoration: ${item.done ? 'line-through' : 'none'}\">${item.description}</span>\n      <i class=\"fa fa-close\" click.trigger=\"removeTodo(item)\" style=\"cursor:pointer;\"></i>\n    </div>\n\n    <form submit.trigger=\"addTodo()\" style=\"margin-top: 20px\">\n      <input type=\"text\" value.bind=\"todoDescription\" placeholder=\"add todo here\"><button type=\"submit\">Add</button>\n    </form>\n\n  </section>\n</template>\n"; });
define('text!tree-dialog.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"tree\"></require>\n  <ai-dialog>\n    <ai-dialog-header>\n      <b>Select Node</b>\n    </ai-dialog-header>\n\n    <ai-dialog-body>\n      <div style=\"max-height:450px;overflow:auto;\">\n        <tree selected-node.two-way=\"folder\"></tree>\n      </div>\n    </ai-dialog-body>\n\n    <ai-dialog-footer>\n      <button class=\"btn btn-default\" click.trigger=\"controller.cancel()\">Cancel</button>\n      <button class=\"btn btn-primary\" click.trigger=\"controller.ok(folder)\">OK</button>\n    </ai-dialog-footer>\n  </ai-dialog>\n</template>"; });
define('text!tree-node.html', ['module'], function(module) { module.exports = "<template>\n  <div class=\"node-name ${selectedClass}\" click.trigger=\"selectNode()\">\n    ${node.node_name}\n  </div>\n  <div class=\"children\" repeat.for=\"child of node.children\">\n    <tree-node node.bind=\"child\" selected-node.two-way=\"selectedNode\"></tree-node>\n  </div>\n</template>"; });
define('text!tree.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./tree-node\"></require>\n  <div repeat.for=\"node of nodes\">\n    <tree-node node.bind=\"node\" selected-node.two-way=\"selectedNode\"></tree-node>\n  </div>\n</template>"; });
define('text!resources/elements/my-textbox.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${value}</h1>\n</template>"; });
//# sourceMappingURL=app-bundle.js.map