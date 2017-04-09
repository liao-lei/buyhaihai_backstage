webpackHotUpdate(0,{

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(152); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(152);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(168);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _antd = __webpack_require__(258);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var createForm = _antd.Form.create;
	var FormItem = _antd.Form.Item;

	var Login = function (_React$Component) {
		_inherits(Login, _React$Component);

		function Login(props) {
			_classCallCheck(this, Login);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Login).call(this, props));
		}

		_createClass(Login, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					_antd.Row,
					null,
					_react2.default.createElement(
						_antd.Col,
						{ span: 12, offset: 6 },
						_react2.default.createElement(_antd.Row, { style: { height: 150 } }),
						_react2.default.createElement(
							_antd.Card,
							{ style: { background: "#e8e9ec", height: 400 } },
							_react2.default.createElement(
								_antd.Form,
								null,
								_react2.default.createElement(_antd.Row, { style: { height: 40 } }),
								_react2.default.createElement(
									_antd.Row,
									{ style: { height: 30, color: 'red' } },
									_react2.default.createElement(
										_antd.Col,
										{ span: 8, offset: 8 },
										_react2.default.createElement(
											"h2",
											null,
											"购嗨嗨管理界面登录"
										)
									)
								),
								_react2.default.createElement(_antd.Row, { style: { height: 50 } }),
								_react2.default.createElement(
									_antd.Row,
									{ style: { height: 30 } },
									_react2.default.createElement(
										_antd.Col,
										{ span: 3, offset: 3 },
										_react2.default.createElement(FormItem, { label: "用户名", hasFeedback: true, style: { margin: 0 } })
									),
									_react2.default.createElement(
										_antd.Col,
										{ span: 12 },
										_react2.default.createElement(_antd.Input, { placeholder: "username" })
									)
								),
								_react2.default.createElement(_antd.Row, { style: { height: 50 } }),
								_react2.default.createElement(
									_antd.Row,
									{ style: { height: 30 } },
									_react2.default.createElement(
										_antd.Col,
										{ span: 3, offset: 3 },
										_react2.default.createElement(FormItem, { label: "密码", hasFeedback: true, style: { margin: 0 } })
									),
									_react2.default.createElement(
										_antd.Col,
										{ span: 12 },
										_react2.default.createElement(_antd.Input, { type: "password", autoComplete: "off", placeholder: "password" })
									)
								),
								_react2.default.createElement(_antd.Row, { style: { height: 50 } }),
								_react2.default.createElement(
									_antd.Row,
									{ style: { height: 30 } },
									_react2.default.createElement(
										_antd.Col,
										{ span: 2, offset: 10 },
										_react2.default.createElement(
											_antd.Button,
											{ type: "primary", size: "large" },
											"登录"
										)
									)
								)
							)
						)
					)
				);
			}
		}]);

		return Login;
	}(_react2.default.Component);

	exports.default = Login;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(259); if (makeExportsHot(module, __webpack_require__(152))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Login.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})