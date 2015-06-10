"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require("classnames");

var _classnames3 = _interopRequireDefault(_classnames2);

var _offcourseSidebarContainer = require("offcourse-sidebar-container");

var _offcourseSidebarContainer2 = _interopRequireDefault(_offcourseSidebarContainer);

var _offcourseMainContainer = require("offcourse-main-container");

var _offcourseMainContainer2 = _interopRequireDefault(_offcourseMainContainer);

var Unacademic = (function (_React$Component) {
  function Unacademic(props) {
    _classCallCheck(this, Unacademic);

    _get(Object.getPrototypeOf(Unacademic.prototype), "constructor", this).call(this, props);
    this.name = "app";
  }

  _inherits(Unacademic, _React$Component);

  _createClass(Unacademic, [{
    key: "classes",
    value: function classes() {
      var _classnames;

      var _props$appState = this.props.appState;
      var levels = _props$appState.levels;
      var modes = _props$appState.modes;

      var levelClass = "" + this.name + "-is-" + levels.current;
      var modeClass = "" + this.name + "-is-" + modes.current;

      return (0, _classnames3["default"])((_classnames = {}, _defineProperty(_classnames, this.name, true), _defineProperty(_classnames, levelClass, levels.current), _defineProperty(_classnames, modeClass, modes.current), _classnames));
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "section",
        { className: this.classes() },
        _react2["default"].createElement(_offcourseSidebarContainer2["default"], this.props),
        _react2["default"].createElement(_offcourseMainContainer2["default"], this.props)
      );
    }
  }]);

  return Unacademic;
})(_react2["default"].Component);

Unacademic.propTypes = {
  appState: _react2["default"].PropTypes.object.isRequired,
  viewModel: _react2["default"].PropTypes.object
};

exports["default"] = Unacademic;
module.exports = exports["default"];
