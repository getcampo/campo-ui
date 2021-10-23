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

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
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
    if (!element) {
      return;
    }

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
        this.element[this.identifier] = this;
      }
    }, {
      key: "disconnect",
      value: function disconnect() {
        this.element.classList.remove('dialog--open');
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
    }, {
      key: "remove",
      value: function remove() {
        var _this2 = this;

        animate(this.element.querySelector('.dialog__scrim'), 'animate--fade-out');
        animate(this.element.querySelector('.dialog__container'), 'animate--zoom-out', function () {
          _this2.element.remove();
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
        this.element[this.identifier] = this;
      }
    }, {
      key: "disconnect",
      value: function disconnect() {
        this.element.classList.remove('drawer--open');
      }
    }, {
      key: "toggle",
      value: function toggle() {
        if (this.element.classList.contains('drawer--open')) {
          this.close();
        } else {
          this.open();
        }
      }
    }, {
      key: "open",
      value: function open() {
        this.element.classList.add('drawer--open');
        animate(this.element.querySelector('.drawer__scrim'), 'animate--fade-in');
        animate(this.element.querySelector('.drawer__container'), 'animate--drawer-in');
      }
    }, {
      key: "close",
      value: function close() {
        var _this = this;

        animate(this.element.querySelector('.drawer__scrim'), 'animate--fade-out');
        animate(this.element.querySelector('.drawer__container'), 'animate--drawer-out', function () {
          _this.element.classList.remove('drawer--open');
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

        this.element[this.identifier] = this;

        this.closeMenuOutside = function (event) {
          if (!_this.element.contains(event.target)) {
            _this.close();
          }
        };
      }
    }, {
      key: "disconnect",
      value: function disconnect() {
        if (this.isOpen()) {
          this.element.classList.remove('dropdown--open');
          document.removeEventListener('click', this.closeMenuOutside);
        }
      }
    }, {
      key: "toggle",
      value: function toggle() {
        if (this.isOpen()) {
          this.close();
        } else {
          this.open();
        }
      }
    }, {
      key: "isOpen",
      value: function isOpen() {
        return this.element.classList.contains('dropdown--open');
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

        this.element[this.identifier] = this;

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

        this.element[this.identifier] = this;
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

        this.element[this.identifier] = this;
        this.element.addEventListener('click', function () {
          var targetElement = document.querySelector(_this.data.get('target'));

          var identifier = _this.data.get('action').split('#')[0];

          var action = _this.data.get('action').split('#')[1];

          var controller = targetElement[identifier];
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
        this.element[this.identifier] = this;
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
      key: "connect",
      value: function connect() {
        var _this = this;

        this.element[this.identifier] = this;
        this.multiple = this.selectTarget.multiple;

        if (!this.multiple) {
          this.maxItemsValue = 1;
        }

        this.content = document.createElement('div');
        this.content.className = 'selector__content';
        this.element.appendChild(this.content);

        if (!this.multiple) {
          this.text = document.createElement('div');
          this.text.className = 'selector__text';
          this.content.appendChild(this.text);
        }

        this.input = document.createElement('input');
        this.input.type = 'text';
        this.input.className = 'selector__input';
        this.setPlaceholder();
        this.content.appendChild(this.input);
        this.menu = document.createElement('div');
        this.menu.className = 'selector__menu';
        this.element.appendChild(this.menu);
        this.initOptions(); // remove unselect option to keep output order

        Array.from(this.selectTarget.options).forEach(function (option) {
          if (!option.selected) {
            option.remove();
          }
        });

        if (this.multiple) {
          this.options.forEach(function (option) {
            if (option.selected) {
              _this.appendChip(option);
            }
          });
        } else {
          this.text.textContent = this.selectTarget.value;
        }

        this.renderMenu();
        this.input.addEventListener('focus', this.focus.bind(this));
        this.input.addEventListener('input', this.onInput.bind(this));
        this.input.addEventListener('keydown', this.onKeydown.bind(this));

        this.clickOutside = function (event) {
          if (!_this.element.contains(event.target)) {
            _this.blur();
          }
        };
      }
    }, {
      key: "maxItemsLimit",
      value: function maxItemsLimit() {
        return this.maxItemsValue && this.selectTarget.selectedOptions.length >= this.maxItemsValue;
      }
    }, {
      key: "setPlaceholder",
      value: function setPlaceholder() {
        if (this.maxItemsLimit()) {
          this.input.removeAttribute('placeholder');
        } else {
          this.input.setAttribute('placeholder', this.placeholderValue);
        }
      }
    }, {
      key: "initOptions",
      value: function initOptions() {
        this.options = Array.from(this.selectTarget.options).map(function (option) {
          return {
            text: option.text,
            value: option.value,
            selected: option.selected
          };
        });
      }
    }, {
      key: "renderMenu",
      value: function renderMenu() {
        var _this2 = this;

        this.menu.innerHTML = '';

        if (this.multiple && this.maxItemsLimit()) {
          this.computedOptions = [];
        } else {
          this.computedOptions = this.filterOptions(this.input.value);
          var createOption;

          if (this.creatableValue) {
            createOption = this.createOption(this.input.value);

            if (createOption) {
              this.computedOptions.unshift(createOption);
            }
          }

          this.computedOptions.forEach(function (option) {
            var dom = _this2.htmlToElement(_this2.renderItem(option));

            _this2.menu.appendChild(dom);
          });

          if (this.computedOptions.length > 0) {
            if (createOption && this.computedOptions.length > 1) {
              this.focusItem(1);
            } else {
              this.focusItem(0);
            }
          }
        }
      }
    }, {
      key: "createOption",
      value: function createOption(input) {
        if (input && input.length > 0) {
          return {
            text: "".concat(input),
            value: input,
            create: true
          };
        } else {
          return false;
        }
      }
    }, {
      key: "onInput",
      value: function onInput() {
        this.renderMenu();
      }
    }, {
      key: "onKeydown",
      value: function onKeydown(event) {
        if (this.maxItemsLimit()) {
          event.preventDefault();
        }

        if (!event.isComposing) {
          switch (event.keyCode) {
            case 13:
              // Enter
              // avoid trigger form submit
              event.preventDefault();
              this.selectFocus();
              break;

            case 8:
              // Backspace
              this.removeLast();
              break;

            case 38:
              // ArrowUp
              this.focusPrev();
              break;

            case 40:
              // ArrowDown
              this.focusNext();
              break;
          }
        }
      }
    }, {
      key: "selectFocus",
      value: function selectFocus() {
        if (this.computedOptions.length) {
          var focusOption = this.computedOptions[this.focusIndex];
          this.addSelected(focusOption);
          this.input.value = '';
          this.renderMenu();
        }
      }
    }, {
      key: "removeLast",
      value: function removeLast() {
        if (this.input.value == '') {
          var lastOptionDom = this.selectTarget.options[this.selectTarget.options.length - 1];

          if (lastOptionDom) {
            this.removeSelected(lastOptionDom.value);
            this.renderMenu();
          }
        }
      }
    }, {
      key: "focusItem",
      value: function focusItem(index) {
        this.focusIndex = index;
        var option = this.computedOptions[index];
        var prevFocusItem = this.element.querySelector('.selector__item--focus');

        if (prevFocusItem) {
          prevFocusItem.classList.remove('selector__item--focus');
        }

        this.itemTargets[this.focusIndex].classList.add('selector__item--focus');
      }
    }, {
      key: "focusPrev",
      value: function focusPrev() {
        if (this.computedOptions.length > 0) {
          if (this.focusIndex > 0) {
            this.focusItem(this.focusIndex - 1);
          } else {
            this.focusItem(this.computedOptions.length - 1);
          }
        }
      }
    }, {
      key: "focusNext",
      value: function focusNext() {
        if (this.computedOptions.length > 0) {
          if (this.focusIndex < this.computedOptions.length - 1) {
            this.focusItem(this.focusIndex + 1);
          } else {
            this.focusItem(0);
          }
        }
      }
    }, {
      key: "filterOptions",
      value: function filterOptions(input) {
        return this.options.filter(function (option) {
          return !option.selected && option.text.toLowerCase().includes(input.toLowerCase());
        });
      }
    }, {
      key: "htmlToElement",
      value: function htmlToElement(html) {
        var template = document.createElement('template');
        template.innerHTML = html.trim();
        return template.content.firstChild;
      }
    }, {
      key: "renderItem",
      value: function renderItem(option) {
        return "\n      <div class=\"selector__item\" data-value=\"".concat(option.value, "\" data-selector-target=\"item\" data-action=\"click->selector#select\">\n        ").concat(option.create ? "Add ".concat(option.text, "...") : option.text, "\n      </div>\n    ");
      }
    }, {
      key: "appendChip",
      value: function appendChip(option) {
        var chip = this.htmlToElement(this.renderChip(option));
        this.content.insertBefore(chip, this.input);
      }
    }, {
      key: "renderChip",
      value: function renderChip(option) {
        return "\n      <div class=\"chip\" data-value=\"".concat(option.value, "\" data-selector-target=\"chip\">\n        ").concat(option.text, "\n        <div class=\"chip__action\">\n          <button type=\"button\" class=\"button button--icon\" data-action=\"selector#unselect\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\" opacity=\".87\"/><path d=\"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm4.3 14.3c-.39.39-1.02.39-1.41 0L12 13.41 9.11 16.3c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41L10.59 12 7.7 9.11c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L12 10.59l2.89-2.89c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41z\"/></svg>\n          </button>\n        </div>\n      </div>\n    ");
      }
    }, {
      key: "focus",
      value: function focus() {
        this.element.classList.add('selector--focus');
        document.addEventListener('click', this.clickOutside);
      }
    }, {
      key: "blur",
      value: function blur() {
        this.element.classList.remove('selector--focus');
        document.removeEventListener('click', this.clickOutside);
      }
    }, {
      key: "unselect",
      value: function unselect(event) {
        event.stopPropagation();
        var chip = event.currentTarget.closest('.chip');
        this.removeSelected(chip.dataset.value);
        this.renderMenu();
      }
    }, {
      key: "getOption",
      value: function getOption(value) {
        return this.options.find(function (option) {
          return option.value == value;
        });
      }
    }, {
      key: "select",
      value: function select(event) {
        event.stopPropagation();
        var item = event.currentTarget;
        var option = this.computedOptions.find(function (option) {
          return option.value == item.dataset.value;
        });
        this.addSelected(option);
        this.input.value = '';
        this.input.focus();
        this.renderMenu();
      }
    }, {
      key: "hasSelected",
      value: function hasSelected(option) {
        return Array.from(this.selectTarget.options).some(function (item) {
          return item.value == option.value;
        });
      }
    }, {
      key: "addSelected",
      value: function addSelected(option) {
        var _this3 = this;

        if (!this.hasSelected(option)) {
          if (this.multiple) {
            this.addSelectedOption(option);
            this.appendChip(option);
          } else {
            this.selectTarget.innerHTML = '';
            this.addSelectedOption(option);
            this.text.textContent = option.text;
          }

          this.setPlaceholder();
          this.options.forEach(function (storeOption) {
            if (storeOption.value == option.value) {
              storeOption.selected = true;
            } else if (!_this3.multiple) {
              storeOption.selected = false;
            }
          });
          this.selectTarget.dispatchEvent(new Event('change', {
            bubbles: true
          }));
        }
      }
    }, {
      key: "addSelectedOption",
      value: function addSelectedOption(option) {
        var dom = document.createElement('option');
        dom.value = option.value;
        dom.text = option.text;
        dom.setAttribute('selected', '');
        this.selectTarget.appendChild(dom);
      }
    }, {
      key: "removeSelected",
      value: function removeSelected(value) {
        Array.from(this.selectTarget.options).forEach(function (option) {
          if (option.value == value) {
            option.remove();
          }
        });

        if (this.multiple) {
          this.chipTargets.forEach(function (chip) {
            if (chip.dataset.value == value) {
              chip.remove();
            }
          });
        } else {
          this.text.textContent = '';
        }

        this.setPlaceholder();
        this.options.forEach(function (storeOption) {
          if (storeOption.value == value) {
            storeOption.selected = false;
          }
        });
        this.selectTarget.dispatchEvent(new Event('change', {
          bubbles: true
        }));
      }
    }]);

    return _default;
  }(stimulus.Controller);

  _defineProperty(_default$7, "values", {
    placeholder: String,
    creatable: Boolean,
    maxItems: Number
  });

  _defineProperty(_default$7, "targets", ["select", "chip", "item"]);

  var _default$8 = /*#__PURE__*/function (_Controller) {
    _inherits(_default, _Controller);

    var _super = _createSuper(_default);

    function _default() {
      _classCallCheck(this, _default);

      return _super.apply(this, arguments);
    }

    _createClass(_default, [{
      key: "connect",
      value: function connect() {
        this.element[this.identifier] = this;
      }
    }, {
      key: "remove",
      value: function remove() {
        this.element.remove();
      }
    }]);

    return _default;
  }(stimulus.Controller);

  function init(application) {
    if (!application) {
      application = stimulus.Application.start();
    }

    application.register("dialog", _default);
    application.register("drawer", _default$1);
    application.register("dropdown", _default$2);
    application.register("floating-action", _default$3);
    application.register("snackbar", _default$4);
    application.register("toggle", _default$5);
    application.register("sheet", _default$6);
    application.register("selector", _default$7);
    application.register("chip", _default$8);
  }

  exports.ChipController = _default$8;
  exports.DialogController = _default;
  exports.DrawerController = _default$1;
  exports.DropdownController = _default$2;
  exports.FloatingActionController = _default$3;
  exports.SelectorController = _default$7;
  exports.SheetController = _default$6;
  exports.SnackbarController = _default$4;
  exports.ToggleController = _default$5;
  exports.init = init;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=campo-ui.js.map
