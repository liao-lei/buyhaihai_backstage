webpackHotUpdate(0,{

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(152); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(152);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(168);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _antd = __webpack_require__(262);

	var _reactRouter = __webpack_require__(265);

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
			key: "submitForm",
			value: function submitForm() {
				var values = this.props.form.getFieldsValue();
				ajax({
					type: "post",
					url: "/users/login",
					data: values,
					success: function success(data) {
						console.log(data.length);
						if (data.length > 0) {
							_reactRouter.hashHistory.push("/backpages");
						} else {
							Modal.error({
								title: '登录失败',
								content: '请检查用户名或密码是否正确'
							});
						}
					}
				});
			}
		}, {
			key: "fieldProps",
			value: function fieldProps(name) {
				// return this.props.form.getFieldProps(name);
			}
		}, {
			key: "render",
			value: function render() {
				var formItemLayout = {
					labelCol: { span: 6 },
					wrapperCol: { span: 14 }
				};
				return _react2.default.createElement(
					_antd.Row,
					null,
					_react2.default.createElement(
						_antd.Col,
						{ span: 12, offset: 6 },
						_react2.default.createElement(_antd.Row, { style: { height: 150 } }),
						_react2.default.createElement(
							_antd.Card,
							{ style: { background: "#33ffcc", height: 400 } },
							_react2.default.createElement(
								"h2",
								{ style: { marginTop: 20, marginLeft: 200, marginBottom: 100, color: "red" } },
								"购嗨嗨管理界面登录"
							),
							_react2.default.createElement(
								_antd.Form,
								{ horizontal: true },
								_react2.default.createElement(
									FormItem,
									_extends({}, formItemLayout, {
										label: "用户名"
									}),
									_react2.default.createElement(_antd.Input, _extends({}, this.fieldProps("username"), { type: "text", placeholder: "请输入密码" }))
								),
								_react2.default.createElement(
									FormItem,
									_extends({}, formItemLayout, {
										label: "密码"
									}),
									_react2.default.createElement(_antd.Input, _extends({}, this.fieldProps("pwd"), { type: "password", placeholder: "请输入密码" }))
								),
								_react2.default.createElement(
									FormItem,
									{ wrapperCol: { span: 16, offset: 10 }, style: { marginTop: 24 } },
									_react2.default.createElement(
										_antd.Button,
										{ type: "primary", onClick: this.submitForm.bind(this) },
										"确定"
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

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(258); if (makeExportsHot(module, __webpack_require__(152))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Login.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})