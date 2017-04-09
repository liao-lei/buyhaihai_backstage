webpackHotUpdate(0,{

/***/ 340:
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

	var _antd = __webpack_require__(263);

	var _ajax = __webpack_require__(262);

	var _ajax2 = _interopRequireDefault(_ajax);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SubMenu = _antd.Menu.SubMenu;
	var MenuItemGroup = _antd.Menu.ItemGroup;
	var InputGroup = _antd.Input.Group;

	var Orderinfo = function (_React$Component) {
	  _inherits(Orderinfo, _React$Component);

	  function Orderinfo(props) {
	    _classCallCheck(this, Orderinfo);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Orderinfo).call(this, props));

	    _this.state = {
	      visible: false,
	      data: [],
	      type: "",
	      _id: "",
	      pagination: {},
	      columns: [{ title: '收货人', dataIndex: 'users.username', key: 'users.username' }, { title: '电话号码', dataIndex: 'users.phonenumber', key: 'users.phonenumber' }, { title: '收货地址', dataIndex: 'addr', key: 'addr' }, { title: '货物状态', dataIndex: 'type', key: 'type' }, { title: '操作', key: 'operation',
	        render: function render(text, record) {
	          return _react2.default.createElement(
	            "span",
	            null,
	            _react2.default.createElement(
	              "button",
	              { onClick: _this.update(text).bind(_this) },
	              "修改订单"
	            )
	          );
	        }
	      }]
	    };
	    return _this;
	  }
	  //将要加载时调用showAll；


	  _createClass(Orderinfo, [{
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      this.showAll();
	    }

	    //后台显示所有商品的订单；

	  }, {
	    key: "showAll",
	    value: function showAll(curpage) {
	      var _this2 = this;

	      (0, _ajax2.default)({
	        type: "get",
	        url: "/order/showsorder",
	        data: { curpage: curpage },
	        success: function success(data) {
	          _this2.setState({
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
	        }
	      });
	    }
	  }, {
	    key: "update",
	    value: function update(text) {
	      var _this3 = this;

	      var that = this;
	      return function () {
	        _this3.setState({
	          visible: true,
	          type: text.type,
	          _id: text._id
	        });
	      };
	    }
	  }, {
	    key: "setType",
	    value: function setType(event) {
	      this.setState({
	        type: event.target.value
	      });
	    }
	  }, {
	    key: "handleOk",
	    value: function handleOk() {
	      (0, _ajax2.default)({
	        type: "get",
	        url: "/order/updateorder",
	        data: {
	          type: this.state.type,
	          _id: this.state._id
	        },
	        success: function (data) {
	          this.setState({
	            visible: false
	          });
	          this.showAll();
	        }.bind(this)
	      });
	    }
	  }, {
	    key: "handleCancel",
	    value: function handleCancel(e) {
	      console.log(e);
	      this.setState({
	        visible: false
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {

	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "div",
	          null,
	          _react2.default.createElement(
	            _antd.Modal,
	            { title: "修改订单", visible: this.state.visible,
	              onOk: this.handleOk.bind(this), onCancel: this.handleCancel.bind(this) },
	            _react2.default.createElement(
	              "p",
	              null,
	              "订单状态：",
	              _react2.default.createElement("input", { type: "text", value: this.state.type, onChange: this.setType.bind(this) })
	            )
	          )
	        ),
	        _react2.default.createElement(_antd.Table, { dataSource: this.state.data, columns: this.state.columns, pagination: this.state.pagination })
	      );
	    }
	  }]);

	  return Orderinfo;
	}(_react2.default.Component);

	exports.default = Orderinfo;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(258); if (makeExportsHot(module, __webpack_require__(152))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Orderinfo.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})