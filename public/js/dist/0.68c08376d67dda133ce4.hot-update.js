webpackHotUpdate(0,{

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

	var _reactDom = __webpack_require__(168);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _antd = __webpack_require__(262);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var confirm = _antd.Modal.confirm;

	var Showsusers = function (_React$Component) {
	  _inherits(Showsusers, _React$Component);

	  function Showsusers(props) {
	    _classCallCheck(this, Showsusers);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Showsusers).call(this, props));

	    _this.state = {};
	    return _this;
	  }

	  _createClass(Showsusers, [{
	    key: "reviseusers",
	    value: function reviseusers() {
	      confirm({
	        title: '您是否确认要修改这项内容',
	        content: '修改',
	        onOk: function onOk() {
	          console.log('确定修改');
	        },
	        onCancel: function onCancel() {}
	      });
	    }
	  }, {
	    key: "deleteusers",
	    value: function deleteusers() {
	      confirm({
	        title: '您是否确认要删除这项内容',
	        content: "删除",
	        onOk: function onOk() {
	          console.log('确定删除');
	        },
	        onCancel: function onCancel() {}
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      var columns = [{
	        title: '用户姓名',
	        dataIndex: 'name'
	      }, {
	        title: '电话号码',
	        dataIndex: 'age'
	      }, {
	        title: '电子邮箱',
	        dataIndex: 'emil'
	      }, {
	        title: '密码',
	        dataIndex: 'address'
	      }, {
	        title: '操作',
	        key: 'operation',
	        render: function render(text, record) {
	          return _react2.default.createElement(
	            "span",
	            null,
	            _react2.default.createElement(
	              "button",
	              { onClick: _this2.reviseusers },
	              "修改"
	            ),
	            _react2.default.createElement("span", { className: "ant-divider" }),
	            _react2.default.createElement(
	              "button",
	              { onClick: _this2.deleteusers },
	              "删除"
	            ),
	            _react2.default.createElement("span", { className: "ant-divider" })
	          );
	        }
	      }];

	      var data = [{
	        key: '1',
	        name: '胡彦斌',
	        age: 1894434343,
	        emil: '771343@qq.com',
	        address: '123456'

	      }, {
	        key: '2',
	        name: '胡彦祖',
	        age: 1546389344,
	        emil: '771343@qq.com',
	        address: '7890123'
	      }, {
	        key: '3',
	        name: '李大嘴',
	        age: 18782323934,
	        emil: '771343@qq.com',
	        address: 'efefe2445r'
	      }];

	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(_antd.Table, { columns: columns, dataSource: data, pagination: false })
	      );
	    }
	  }]);

	  return Showsusers;
	}(_react2.default.Component);

	exports.default = Showsusers;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(258); if (makeExportsHot(module, __webpack_require__(152))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Showsusers.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})