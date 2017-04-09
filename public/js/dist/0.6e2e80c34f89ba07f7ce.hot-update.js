webpackHotUpdate(0,{

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(152); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	var _react = __webpack_require__(152);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(168);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Index = __webpack_require__(257);

	var _Index2 = _interopRequireDefault(_Index);

	var _Login = __webpack_require__(261);

	var _Login2 = _interopRequireDefault(_Login);

	var _Backpages = __webpack_require__(263);

	var _Backpages2 = _interopRequireDefault(_Backpages);

	var _Backleft = __webpack_require__(328);

	var _Backleft2 = _interopRequireDefault(_Backleft);

	var _Backright = __webpack_require__(329);

	var _Backright2 = _interopRequireDefault(_Backright);

	var _Showsusers = __webpack_require__(330);

	var _Showsusers2 = _interopRequireDefault(_Showsusers);

	var _Limittime = __webpack_require__(332);

	var _Limittime2 = _interopRequireDefault(_Limittime);

	var _Twoarea = __webpack_require__(333);

	var _Twoarea2 = _interopRequireDefault(_Twoarea);

	var _Recogoods = __webpack_require__(334);

	var _Recogoods2 = _interopRequireDefault(_Recogoods);

	var _Lookadv = __webpack_require__(335);

	var _Lookadv2 = _interopRequireDefault(_Lookadv);

	var _Orderinfo = __webpack_require__(336);

	var _Orderinfo2 = _interopRequireDefault(_Orderinfo);

	var _reactRouter = __webpack_require__(265);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(
		_reactRouter.Router,
		{ history: _reactRouter.hashHistory },
		_react2.default.createElement(
			_reactRouter.Route,
			{ path: "/", component: _Index2.default },
			_react2.default.createElement(_reactRouter.IndexRoute, { component: _Login2.default }),
			_react2.default.createElement(_reactRouter.Route, { path: "/login", component: _Login2.default }),
			_react2.default.createElement(
				_reactRouter.Route,
				{ path: "/backpages", component: _Backpages2.default },
				_react2.default.createElement(_reactRouter.Route, { path: "/showsusers", component: _Showsusers2.default }),
				_react2.default.createElement(_reactRouter.Route, { path: "/limittime", component: _Limittime2.default }),
				_react2.default.createElement(_reactRouter.Route, { path: "/twoarea", component: _Twoarea2.default }),
				_react2.default.createElement(_reactRouter.Route, { path: "/recogoods", component: _Recogoods2.default }),
				_react2.default.createElement(_reactRouter.Route, { path: "/lookadv", component: _Lookadv2.default }),
				_react2.default.createElement(_reactRouter.Route, { path: "/orderinfo", component: _Orderinfo2.default })
			)
		)
	), document.getElementById("contect"));

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(258); if (makeExportsHot(module, __webpack_require__(152))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "main.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },

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
	                { to: "/lookadv" },
	                "看广告领惠币(商品)"
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

/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(152); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(152);

	var _react2 = _interopRequireDefault(_react);

	var _antd = __webpack_require__(262);

	var _Addusers = __webpack_require__(331);

	var _Addusers2 = _interopRequireDefault(_Addusers);

	var _ajax = __webpack_require__(337);

	var _ajax2 = _interopRequireDefault(_ajax);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SubMenu = _antd.Menu.SubMenu;
	var MenuItemGroup = _antd.Menu.ItemGroup;

	var User = function (_React$Component) {
		_inherits(User, _React$Component);

		function User(props) {
			_classCallCheck(this, User);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(User).call(this, props));

			_this.state = {
				data: [],
				pagination: {},
				columns: [{ title: '用户名', dataIndex: 'username', key: 'username' }, { title: 'email', dataIndex: 'email', key: 'email' }, { title: '电话', dataIndex: 'phone', key: 'phone' }, { title: '操作', key: 'operation', render: function render(text, record) {
						console.log([text, record]);
						return _react2.default.createElement(
							"span",
							null,
							_react2.default.createElement(
								_antd.Button,
								{ onClick: _this.showById(text) },
								"修改"
							),
							_react2.default.createElement(
								_antd.Button,
								{ onClick: _this.del },
								"删除"
							)
						);
					} }]
			};

			return _this;
		}

		_createClass(User, [{
			key: "componentWillMount",
			value: function componentWillMount() {
				this.showAll();
			}
		}, {
			key: "showAll",
			value: function showAll(curpage) {
				(0, _ajax2.default)({
					type: "get",
					url: "/users/showAll",
					data: { curpage: curpage },
					success: function (data) {
						var _this2 = this;

						this.setState({
							data: data.data,
							pagination: {
								current: parseInt(data.curpage),
								total: data.count,
								pageSize: 5,
								showQuickJumper: true,
								onChange: function onChange(curpage) {

									_this2.showAll(curpage);
								}
							}
						});
					}.bind(this)
				});
			}
		}, {
			key: "showById",
			value: function showById(text) {
				return function () {
					console.log(['修改', text.username]);
				};
			}
		}, {
			key: "del",
			value: function del() {
				console.log('del');
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(
						"h1",
						null,
						"用户管理"
					),
					_react2.default.createElement(_Addusers2.default, null),
					_react2.default.createElement(_antd.Table, { dataSource: this.state.data, columns: this.state.columns, pagination: this.state.pagination })
				);
			}
		}]);

		return User;
	}(_react2.default.Component);

	exports.default = User;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(258); if (makeExportsHot(module, __webpack_require__(152))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Showsusers.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})