webpackHotUpdate(0,{

/***/ 335:
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

	var _antd = __webpack_require__(262);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Lookadv = function (_React$Component) {
	  _inherits(Lookadv, _React$Component);

	  function Lookadv(props) {
	    _classCallCheck(this, Lookadv);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Lookadv).call(this, props));

	    _this.state = {
	      priviewVisible: false,
	      priviewImage: ''
	    };
	    return _this;
	  }

	  _createClass(Lookadv, [{
	    key: "handleCancel",
	    value: function handleCancel() {
	      this.setState({
	        priviewVisible: false
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      var props = {
	        action: '/upload.do',
	        listType: 'picture-card',
	        defaultFileList: [{
	          uid: -1,
	          name: 'xxx.png',
	          status: 'done',
	          url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
	          thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
	        }],
	        onPreview: function onPreview(file) {
	          _this2.setState({
	            priviewImage: file.url,
	            priviewVisible: true
	          });
	        }
	      };

	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          _antd.Row,
	          null,
	          _react2.default.createElement(
	            _antd.Col,
	            { span: 6, offset: 10, style: { fontSize: 20, color: "red" } },
	            "看广告领惠币商品录入"
	          ),
	          _react2.default.createElement(
	            _antd.Col,
	            { span: 12, offset: 6 },
	            _react2.default.createElement(
	              "div",
	              { className: "clearfix" },
	              _react2.default.createElement(
	                _antd.Upload,
	                props,
	                _react2.default.createElement(_antd.Icon, { type: "plus" }),
	                _react2.default.createElement(
	                  "div",
	                  { className: "ant-upload-text" },
	                  "上传照片"
	                )
	              ),
	              _react2.default.createElement("a", { href: "https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png", target: "_blank", className: "upload-example" }),
	              _react2.default.createElement(
	                _antd.Modal,
	                { visible: this.state.priviewVisible, footer: null, onCancel: this.handleCancel.bind(this) },
	                _react2.default.createElement("img", { alt: "example", src: this.state.priviewImage })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            _antd.Col,
	            { span: 12, offset: 6 },
	            _react2.default.createElement(
	              "div",
	              { className: "example-input" },
	              "惠币数据：",
	              _react2.default.createElement(_antd.Input, { size: "large", placeholder: "产品名称" }),
	              "产品名称：",
	              _react2.default.createElement(_antd.Input, { size: "large", placeholder: "产品名称" }),
	              "产品现价：",
	              _react2.default.createElement(_antd.Input, { size: "large", placeholder: "产品现价" }),
	              "产品原价：",
	              _react2.default.createElement(_antd.Input, { size: "large", placeholder: "产品原件" })
	            )
	          ),
	          _react2.default.createElement(
	            _antd.Col,
	            { span: 12, offset: 10, style: { marginTop: 20 } },
	            _react2.default.createElement(
	              _antd.Button,
	              { type: "primary" },
	              "提交商品信息"
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Lookadv;
	}(_react2.default.Component);

	exports.default = Lookadv;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(258); if (makeExportsHot(module, __webpack_require__(152))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Lookadv.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})