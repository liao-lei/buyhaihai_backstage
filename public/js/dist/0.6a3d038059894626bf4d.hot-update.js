webpackHotUpdate(0,{

/***/ 338:
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

	var _ajax = __webpack_require__(332);

	var _ajax2 = _interopRequireDefault(_ajax);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FormItem = _antd.Form.Item;

	var Addgoods = function (_React$Component) {
	  _inherits(Addgoods, _React$Component);

	  function Addgoods(props) {
	    _classCallCheck(this, Addgoods);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Addgoods).call(this, props));

	    _this.state = {
	      indexImgList: [],
	      indexImgPath: []
	    };
	    return _this;
	  }

	  _createClass(Addgoods, [{
	    key: "submitForm",
	    value: function submitForm() {
	      var _this2 = this;

	      var values = this.props.form.getFieldsValue();
	      //将上传图片的路径保存在values中。
	      values.index_img = this.state.indexImgPath;
	      (0, _ajax2.default)({
	        type: "get",
	        url: "/goods/add",
	        data: values,
	        success: function success() {
	          _this2.setState({
	            visible: false
	          });
	          _this2.props.showAll();
	        }
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
	      this.setState({ visible: false, indexImgList: [], indexImgPath: [] });
	    }
	  }, {
	    key: "fieldProps",
	    value: function fieldProps(name) {
	      return this.props.form.getFieldProps(name);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var formItemLayout = {
	        labelCol: { span: 6 },
	        wrapperCol: { span: 14 }
	      };
	      var props = {
	        action: '/goods/upload',
	        listType: 'picture',
	        multiple: true,
	        onChange: function (data) {
	          var fileList = data.fileList;
	          var indexPath = fileList.map(function (file) {
	            return file.response;
	          });
	          this.setState({
	            indexImgList: fileList,
	            indexImgPath: indexPath
	          });
	        }.bind(this)
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
	          { title: "增加商品", visible: this.state.visible, onOk: this.submitForm.bind(this), onCancel: this.handleCancel.bind(this) },
	          _react2.default.createElement(
	            _antd.Form,
	            { horizontal: true },
	            _react2.default.createElement(
	              FormItem,
	              _extends({}, formItemLayout, { label: "商品名称" }),
	              _react2.default.createElement(_antd.Input, _extends({}, this.fieldProps("name"), { type: "text", placeholder: "请输入商品名称" }))
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({}, formItemLayout, { label: "价格" }),
	              _react2.default.createElement(_antd.Input, _extends({}, this.fieldProps("price"), { type: "text", placeholder: "请商品价格" }))
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({}, formItemLayout, { label: "原价格" }),
	              _react2.default.createElement(_antd.Input, _extends({}, this.fieldProps("yprice"), { type: "text", placeholder: "请商品原来价格" }))
	            ),
	            _react2.default.createElement(
	              FormItem,
	              _extends({}, formItemLayout, { label: "上传首页图片" }),
	              _react2.default.createElement(
	                _antd.Upload,
	                _extends({}, props, { fileList: this.state.indexImgList, className: "upload-list-inline" }),
	                _react2.default.createElement(
	                  _antd.Button,
	                  { type: "ghost" },
	                  _react2.default.createElement(_antd.Icon, { type: "upload" }),
	                  " 点击上传"
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Addgoods;
	}(_react2.default.Component);

	exports.default = _antd.Form.create()(Addgoods);

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(258); if (makeExportsHot(module, __webpack_require__(152))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Addgoods.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})