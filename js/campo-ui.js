(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('stimulus')) :
  typeof define === 'function' && define.amd ? define(['exports', 'stimulus'], factory) :
  (global = global || self, factory(global.CampoUI = {}, global.Stimulus));
}(this, (function (exports, stimulus) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    return function () {
      var Super = _getPrototypeOf(Derived),
          result;

      if (_isNativeReflectConstruct()) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function animate(element, animationName, callback) {
    if (element.classList.contains('animate')) {
      // wait another animate end
      element.addEventListener('animationend', function () {
        animateRun(element, animationName, callback);
      });
    } else {
      animateRun(element, animationName, callback);
    }
  }

  function animateRun(element, animationName, callback) {
    element.classList.add('animate', animationName);

    function handleAnimationEnd() {
      element.classList.remove('animate', animationName);
      element.removeEventListener('animationend', handleAnimationEnd);
      if (typeof callback === 'function') callback();
    }

    element.addEventListener('animationend', handleAnimationEnd);
  }

  var _default = /*#__PURE__*/function (_Controller) {
    _inherits(_default, _Controller);

    var _super = _createSuper(_default);

    function _default() {
      _classCallCheck(this, _default);

      return _super.apply(this, arguments);
    }

    _createClass(_default, [{
      key: "connect",
      value: function connect() {
        this.element.insertAdjacentHTML('beforeend', "\n      <div class=\"dialog__scrim\" data-action=\"click->dialog#close\"></div>\n    ");
      }
    }, {
      key: "toggle",
      value: function toggle() {
        if (this.element.classList.contains('dialog--open')) {
          this.close();
        } else {
          this.open();
        }
      }
    }, {
      key: "open",
      value: function open() {
        this.element.classList.add('dialog--open');
        animate(this.element.querySelector('.dialog__scrim'), 'animate--fade-in');
        animate(this.element.querySelector('.dialog__container'), 'animate--zoom-in');
      }
    }, {
      key: "close",
      value: function close() {
        var _this = this;

        animate(this.element.querySelector('.dialog__scrim'), 'animate--fade-out');
        animate(this.element.querySelector('.dialog__container'), 'animate--zoom-out', function () {
          _this.element.classList.remove('dialog--open');
        });
      }
    }]);

    return _default;
  }(stimulus.Controller);

  var _default$1 = /*#__PURE__*/function (_Controller) {
    _inherits(_default, _Controller);

    var _super = _createSuper(_default);

    function _default() {
      _classCallCheck(this, _default);

      return _super.apply(this, arguments);
    }

    _createClass(_default, [{
      key: "connect",
      value: function connect() {
        this.element.insertAdjacentHTML('beforeend', "\n      <div class=\"drawer__scrim\" data-action=\"click->drawer#close\"></div>\n    ");

        if (this.persistenceEnabled()) {
          this.restore();
        }
      }
    }, {
      key: "persistenceEnabled",
      value: function persistenceEnabled() {
        return this.data.get('persistence') == 'true' && window.innerWidth > 480;
      }
    }, {
      key: "store",
      value: function store() {
        if (this.persistenceEnabled()) {
          localStorage.setItem('drawerOpened', this.element.classList.contains('drawer--open'));
        }
      }
    }, {
      key: "restore",
      value: function restore() {
        if (this.persistenceEnabled()) {
          if (localStorage.getItem('drawerOpened') == 'true') {
            this.element.classList.add('drawer--open');
          }
        }
      }
    }, {
      key: "toggle",
      value: function toggle() {
        if (this.element.classList.contains('drawer--open')) {
          this.close();
        } else {
          this.open();
        }

        this.store();
      }
    }, {
      key: "open",
      value: function open() {
        this.element.classList.add('drawer--open');
        animate(this.element.querySelector('.drawer__scrim'), 'animate--fade-in');
        animate(this.element.querySelector('.drawer__container'), 'animate--drawer-in');
        this.store();
      }
    }, {
      key: "close",
      value: function close() {
        var _this = this;

        animate(this.element.querySelector('.drawer__scrim'), 'animate--fade-out');
        animate(this.element.querySelector('.drawer__container'), 'animate--drawer-out', function () {
          _this.element.classList.remove('drawer--open');

          _this.store();
        });
      }
    }]);

    return _default;
  }(stimulus.Controller);

  var _default$2 = /*#__PURE__*/function (_Controller) {
    _inherits(_default, _Controller);

    var _super = _createSuper(_default);

    function _default() {
      _classCallCheck(this, _default);

      return _super.apply(this, arguments);
    }

    _createClass(_default, [{
      key: "connect",
      value: function connect() {
        var _this = this;

        this.closeMenuOutside = function (event) {
          if (!_this.element.contains(event.target)) {
            _this.close();
          }
        };
      }
    }, {
      key: "toggle",
      value: function toggle() {
        if (this.element.classList.contains('dropdown--open')) {
          this.close();
        } else {
          this.open();
        }
      }
    }, {
      key: "open",
      value: function open() {
        this.element.classList.add('dropdown--open');
        animate(this.element.querySelector('.dropdown__menu'), 'animate--scale-in');
        document.addEventListener('click', this.closeMenuOutside);
      }
    }, {
      key: "close",
      value: function close() {
        var _this2 = this;

        animate(this.element.querySelector('.dropdown__menu'), 'animate--scale-out', function () {
          _this2.element.classList.remove('dropdown--open');
        });
        document.removeEventListener('click', this.closeMenuOutside);
      }
    }]);

    return _default;
  }(stimulus.Controller);

  var _default$3 = /*#__PURE__*/function (_Controller) {
    _inherits(_default, _Controller);

    var _super = _createSuper(_default);

    function _default() {
      _classCallCheck(this, _default);

      return _super.apply(this, arguments);
    }

    _createClass(_default, [{
      key: "connect",
      value: function connect() {
        var _this = this;

        this.closeMenuOutside = function (event) {
          if (!_this.element.contains(event.target)) {
            _this.close();
          }
        };
      }
    }, {
      key: "toggle",
      value: function toggle() {
        if (this.element.classList.contains('floating-action--open')) {
          this.close();
        } else {
          this.open();
        }
      }
    }, {
      key: "open",
      value: function open() {
        this.element.classList.add('floating-action--open');
        animate(this.element.querySelector('.floating-action__menu'), 'animate--scale-in');
        document.addEventListener('click', this.closeMenuOutside);
      }
    }, {
      key: "close",
      value: function close() {
        var _this2 = this;

        animate(this.element.querySelector('.floating-action__menu'), 'animate--scale-out', function () {
          _this2.element.classList.remove('floating-action--open');
        });
        document.removeEventListener('click', this.closeMenuOutside);
      }
    }]);

    return _default;
  }(stimulus.Controller);

  var _default$4 = /*#__PURE__*/function (_Controller) {
    _inherits(_default, _Controller);

    var _super = _createSuper(_default);

    function _default() {
      _classCallCheck(this, _default);

      return _super.apply(this, arguments);
    }

    _createClass(_default, [{
      key: "connect",
      value: function connect() {
        var _this = this;

        var delay = parseInt(this.data.get('period')) || 5000;
        animate(this.element, 'animate--zoom-in', function () {
          setTimeout(function () {
            _this.remove();
          }, delay);
        });
      }
    }, {
      key: "remove",
      value: function remove() {
        var _this2 = this;

        animate(this.element, 'animate--zoom-out', function () {
          _this2.element.remove();
        });
      }
    }]);

    return _default;
  }(stimulus.Controller);

  var _default$5 = /*#__PURE__*/function (_Controller) {
    _inherits(_default, _Controller);

    var _super = _createSuper(_default);

    function _default() {
      _classCallCheck(this, _default);

      return _super.apply(this, arguments);
    }

    _createClass(_default, [{
      key: "connect",
      value: function connect() {
        var _this = this;

        this.element.addEventListener('click', function () {
          var targetElement = document.querySelector(_this.data.get('target'));

          var identifier = _this.data.get('action').split('#')[0];

          var action = _this.data.get('action').split('#')[1];

          var controller = _this.application.getControllerForElementAndIdentifier(targetElement, identifier);

          controller[action].call(controller);
        });
      }
    }]);

    return _default;
  }(stimulus.Controller);

  var _default$6 = /*#__PURE__*/function (_Controller) {
    _inherits(_default, _Controller);

    var _super = _createSuper(_default);

    function _default() {
      _classCallCheck(this, _default);

      return _super.apply(this, arguments);
    }

    _createClass(_default, [{
      key: "connect",
      value: function connect() {
        console.log('hit');
        this.element.insertAdjacentHTML('beforeend', "\n      <div class=\"sheet__scrim\" data-action=\"click->sheet#close\"></div>\n    ");
      }
    }, {
      key: "toggle",
      value: function toggle() {
        if (this.element.classList.contains('sheet--open')) {
          this.close();
        } else {
          this.open();
        }
      }
    }, {
      key: "open",
      value: function open() {
        this.element.classList.add('sheet--open');
        animate(this.element.querySelector('.sheet__scrim'), 'animate--fade-in');
        animate(this.element.querySelector('.sheet__container'), 'animate--sheet-in');
      }
    }, {
      key: "close",
      value: function close() {
        var _this = this;

        animate(this.element.querySelector('.sheet__scrim'), 'animate--fade-out');
        animate(this.element.querySelector('.sheet__container'), 'animate--sheet-out', function () {
          _this.element.classList.remove('sheet--open');
        });
      }
    }]);

    return _default;
  }(stimulus.Controller);

  var _default$7 = /*#__PURE__*/function (_Controller) {
    _inherits(_default, _Controller);

    var _super = _createSuper(_default);

    function _default() {
      _classCallCheck(this, _default);

      return _super.apply(this, arguments);
    }

    _createClass(_default, [{
      key: "remove",
      value: function remove() {
        this.element.remove();
      }
    }]);

    return _default;
  }(stimulus.Controller);

  var application = stimulus.Application.start();
  application.register("dialog", _default);
  application.register("drawer", _default$1);
  application.register("dropdown", _default$2);
  application.register("floating-action", _default$3);
  application.register("snackbar", _default$4);
  application.register("toggle", _default$5);
  application.register("sheet", _default$6);
  application.register("chip", _default$7);

  exports.application = application;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=campo-ui.js.map
