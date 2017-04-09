webpackHotUpdate(0,{

/***/ 331:
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

	var _ajax = __webpack_require__(337);

	var _ajax2 = _interopRequireDefault(_ajax);

	var _antd = __webpack_require__(262);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FormItem = _antd.Form.Item;

	var Addusers = function (_React$Component) {
	  _inherits(Addusers, _React$Component);

	  function Addusers(props) {
	    _classCallCheck(this, Addusers);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Addusers).call(this, props));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(Addusers, [{
	    key: "submitForm",
	    value: function submitForm() {
	      this.props.form.validateFields(function (errors, values) {
	        if (!!errors) {
	          console.log('Errors in form!!!');
	          return;
	        }
	        console.log('Submit!!!');
	        console.log(values);
	      });
	    }
	  }, {
	    key: "showAdd",
	    value: function showAdd() {
	      this.setState({
	        visible: true
	      });
	    }
	  }, {
	    key: "handleCancel",
	    value: function handleCancel() {
	      this.setState({ visible: false });
	    }
	  }, {
	    key: "validateUsername",
	    value: function validateUsername() {
	      return this.props.form.getFieldProps('username', {
	        rules: [{ required: true, min: 5, message: '用户名至少为 5 个字符' }, {
	          validator: function validator(rule, value, callback) {
	            if (!value) {
	              callback();
	            } else {
	              (0, _ajax2.default)({
	                type: "get",
	                url: "/users/validate",
	                data: { username: value },
	                success: function success(data) {
	                  if (data.msg == 0) {
	                    callback("用户名被占用");
	                  } else {
	                    callback();
	                  }
	                }
	              });
	            }
	          }
	        }]
	      });
	    }
	  }, {
	    key: "validatePwd",
	    value: function validatePwd() {
	      return this.props.form.getFieldProps('pwd', {
	        rules: [{ required: true, message: '密码至少为 6 个字符，并且只能有字母和数字组成', pattern: /^[0-9a-zA-Z]{6,20}$/ }]
	      });
	    }
	  }, {
	    key: "validateConfirmPwd",
	    value: function validateConfirmPwd() {
	      var _this2 = this;

	      return this.props.form.getFieldProps('confirmPwd', {
	        rules: [{ required: true, message: '格式不正确', pattern: /^[0-9a-zA-Z]{6,20}$/ }, {
	          validator: function validator(rule, value, callback) {
	            if (_this2.props.form.getFieldValue("pwd") == value) {
	              callback();
	            } else {
	              callback("两次密码不一致");
	            }
	          }
	        }]
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _props$form = this.props.form;
	      var getFieldError = _props$form.getFieldError;
	      var isFieldValidating = _props$form.isFieldValidating;


	      var formItemLayout = {
	        labelCol: { span: 6 },
	        wrapperCol: { span: 14 }
	      };

	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          _antd.Button,
	          { type: "primary", onClick: this.showAdd.bind(this) },
	          "增加"
	        ),
	        _react2.default.createElement(
	          _antd.Modal,
	          { title: "增加用户", visible: this.state.visible,
	            onOk: this.submitForm.bind(this), onCancel: this.handleCancel.bind(this)
	          },
	          _react2.default.createElement(
	            _antd.Form,
	            { horizontal: true, form: this.props.form },
	            _react2.default.createElement(
	              FormItem,
	              _extends({}, formItemLayout, {
	                label: "用户名",
	                hasFeedback: true,
	                help: isFieldValidating('username') ? '校验中...' : (getFieldError('username') || []).join(', ')

	              }),
	              _react2.default.createElement(_antd.Input, _extends({}, this.validateUsername(), { type: "text", placeholder: "请输入用户名" }))
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({}, formItemLayout, {
	                label: "密码",
	                hasFeedback: true,
	                help: isFieldValidating('pwd') ? '校验中...' : (getFieldError('pwd') || []).join(', ')

	              }),
	              _react2.default.createElement(_antd.Input, _extends({}, this.validatePwd(), { type: "password", placeholder: "请输入密码" }))
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({}, formItemLayout, {
	                label: "确认密码",
	                hasFeedback: true,
	                help: isFieldValidating('confirmPwd') ? '校验中...' : (getFieldError('confirmPwd') || []).join(', ')

	              }),
	              _react2.default.createElement(_antd.Input, _extends({}, this.validateConfirmPwd(), { type: "password", placeholder: "请输入确认密码" }))
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({}, formItemLayout, {
	                label: "电话号码"
	              }),
	              _react2.default.createElement(_antd.Input, _extends({}, this.props.form.getFieldProps("phone"), { type: "text", placeholder: "请电话号码" }))
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({}, formItemLayout, {
	                label: "地址"
	              }),
	              _react2.default.createElement(_antd.Input, _extends({}, this.props.form.getFieldProps("addr"), { type: "text", placeholder: "请地址" }))
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Addusers;
	}(_react2.default.Component);

	exports.default = _antd.Form.create()(Addusers);

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(258); if (makeExportsHot(module, __webpack_require__(152))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Addusers.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(152); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	var ajax = function ajax(params) {
	    var paramStr = "";
	    var fetchObj;
	    for (var key in params.data) {
	        paramStr += key + "=" + params.data[key] + "&";
	    }
	    if (params.type != "post" && params.type != "POST") {
	        params.url += "?" + paramStr;
	        fetchObj = fetch(params.url, { credentials: 'include' });
	    } else {
	        fetchObj = fetch(params.url, {
	            method: "post",
	            headers: { "Content-Type": "application/x-www-form-urlencoded" },
	            body: paramStr,
	            credentials: 'include'
	        });
	    }
	    fetchObj.then(function (res) {
	        if (res.ok) {
	            res.text().then(function (data) {
	                try {
	                    params.success(JSON.parse(data));
	                } catch (e) {
	                    params.success(data);
	                }
	            });
	        }
	    });
	};
	module.exports = ajax;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(258); if (makeExportsHot(module, __webpack_require__(152))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ajax.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})