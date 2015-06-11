"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }

function _defineProperty(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require("classnames");

var _classnames3 = _interopRequireDefault(_classnames2);

var _ramda = require("ramda");

var _ramda2 = _interopRequireDefault(_ramda);

var _offcourseComponentBreadcrumb = require("offcourse-component-breadcrumb");

var _offcourseComponentBreadcrumb2 = _interopRequireDefault(_offcourseComponentBreadcrumb);

var Breadcrumbs = (function (_React$Component) {
  function Breadcrumbs(props) {
    _classCallCheck(this, Breadcrumbs);

    _get(Object.getPrototypeOf(Breadcrumbs.prototype), "constructor", this).call(this, props);
    this.name = "breadcrumbs";
  }

  _inherits(Breadcrumbs, _React$Component);

  _createClass(Breadcrumbs, [{
    key: "classes",
    value: function classes() {
      return (0, _classnames3["default"])(_defineProperty({}, this.name, true));
    }
  }, {
    key: "render",
    value: function render() {
      var levels = this.props.levels;
      var current = levels.current || "";
      var filterLevels = _ramda2["default"].filter(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2);

        var key = _ref2[0];
        var value = _ref2[1];
        return key !== "current" && value;
      });
      var filteredLevels = filterLevels(_ramda2["default"].toPairs(levels));
      var createBreadcrumbs = _ramda2["default"].map(function (level) {
        return _react2["default"].createElement(_offcourseComponentBreadcrumb2["default"], { key: level, level: level, current: current });
      });
      var breadcrumbs = createBreadcrumbs(filteredLevels);

      return _react2["default"].createElement(
        "nav",
        { className: this.classes() },
        _react2["default"].createElement(
          "ul",
          null,
          breadcrumbs
        )
      );
    }
  }]);

  return Breadcrumbs;
})(_react2["default"].Component);

Breadcrumbs.propTypes = {
  levels: _react2["default"].PropTypes.object.isRequired
};

exports["default"] = Breadcrumbs;
module.exports = exports["default"];