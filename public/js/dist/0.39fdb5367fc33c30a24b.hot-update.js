webpackHotUpdate(0,{

/***/ 328:
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

	var _reactRouter = __webpack_require__(265);

	var _antd = __webpack_require__(262);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SubMenu = _antd.Menu.SubMenu;

	var Backpages = function (_React$Component) {
	  _inherits(Backpages, _React$Component);

	  function Backpages(props) {
	    _classCallCheck(this, Backpages);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Backpages).call(this, props));

	    _this.state = {
	      theme: 'light'
	    };
	    return _this;
	  }

	  _createClass(Backpages, [{
	    key: "changeTheme",
	    value: function changeTheme(value) {
	      this.setState({
	        theme: value ? 'dark' : 'light'
	      });
	    }
	  }, {
	    key: "handleClick",
	    value: function handleClick(e) {
	      console.log('click ', e);
	      this.setState({
	        current: e.key
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { style: { background: "#BCD2EE", height: 500, paddingLeft: 10 } },
	        _react2.default.createElement(_antd.Switch, { onChange: this.changeTheme.bind(this), checkedChildren: "暗", unCheckedChildren: "亮" }),
	        _react2.default.createElement("br", null),
	        _react2.default.createElement("br", null),
	        _react2.default.createElement(
	          _antd.Menu,
	          { theme: this.state.theme,
	            onClick: this.handleClick.bind(this),
	            style: { width: 240 },
	            defaultOpenKeys: ['sub1'],
	            selectedKeys: [this.state.current],
	            mode: "inline"
	          },
	          _react2.default.createElement(
	            SubMenu,
	            { key: "sub1", title: _react2.default.createElement(
	                "span",
	                null,
	                _react2.default.createElement(_antd.Icon, { type: "user" }),
	                _react2.default.createElement(
	                  "span",
	                  null,
	                  "用户信息"
	                )
	              ) },
	            _react2.default.createElement(
	              _antd.Menu.Item,
	              { key: "13" },
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: "/showsusers" },
	                "显示所有用户信息"
	              )
	            )
	          ),
	          _react2.default.createElement(
	            SubMenu,
	            { key: "sub2", title: _react2.default.createElement(
	                "span",
	                null,
	                _react2.default.createElement(_antd.Icon, { type: "appstore" }),
	                _react2.default.createElement(
	                  "span",
	                  null,
	                  "商品推荐信息"
	                )
	              ) },
	            _react2.default.createElement(
	              _antd.Menu.Item,
	              { key: "5" },
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: "/limittime" },
	                "限时秒杀"
	              )
	            ),
	            _react2.default.createElement(
	              _antd.Menu.Item,
	              { key: "6" },
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: "/twoarea" },
	                "两元限购区"
	              )
	            ),
	            _react2.default.createElement(
	              _antd.Menu.Item,
	              { key: "7" },
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: "/recogoods" },
	                "推荐商品"
	              )
	            ),
	            _react2.default.createElement(
	              _antd.Menu.Item,
	              { key: "8" },
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: "/goodlist" },
	                "商品列表"
	              )
	            )
	          ),
	          _react2.default.createElement(
	            SubMenu,
	            { key: "sub4", title: _react2.default.createElement(
	                "span",
	                null,
	                _react2.default.createElement(_antd.Icon, { type: "inbox" }),
	                _react2.default.createElement(
	                  "span",
	                  null,
	                  "订单信息"
	                )
	              ) },
	            _react2.default.createElement(
	              _antd.Menu.Item,
	              { key: "9" },
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: "/orderinfo" },
	                "查看订单信息"
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Backpages;
	}(_react2.default.Component);

	exports.default = Backpages;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(258); if (makeExportsHot(module, __webpack_require__(152))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Backleft.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})