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

	var _ajax = __webpack_require__(332);

	var _ajax2 = _interopRequireDefault(_ajax);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Recogoods = function (_React$Component) {
	  _inherits(Recogoods, _React$Component);

	  function Recogoods(props) {
	    _classCallCheck(this, Recogoods);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Recogoods).call(this, props));

	    _this.state = {
	      data: [],
	      pagination: {},
	      columns: [{ title: '商品名称', dataIndex: 'goods.name', key: 'goods.name' }, { title: '商品现价', dataIndex: 'goods.price', key: 'goods.price' }, { title: '商品原价', dataIndex: 'goods.yprice', key: 'goods.yprice' }, { title: '商品图片', key: 'goods.main_img',
	        render: function render(text, record) {
	          console.log(text);
	          return _react2.default.createElement("img", { style: { width: 70, height: 70 }, src: text.goods.main_img });
	        }
	      }, { title: '操作', key: 'operation', render: function render(text, record) {
	          return _react2.default.createElement(
	            "span",
	            null,
	            _react2.default.createElement(
	              _antd.Button,
	              { onClick: _this.del(text) },
	              "删除"
	            )
	          );
	        } }]
	    };
	    return _this;
	  }

	  _createClass(Recogoods, [{
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      this.showAll();
	    }
	    //显示所有推荐商品的信息；

	  }, {
	    key: "showAll",
	    value: function showAll(curpage) {
	      var _this2 = this;

	      (0, _ajax2.default)({
	        type: "get",
	        url: "/recgoods/showrec",
	        data: { curpage: curpage },
	        success: function success(data) {
	          console.log("data12");
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

	    //删除促销的商品；

	  }, {
	    key: "del",
	    value: function del(text) {
	      var _this3 = this;

	      return function () {
	        (0, _ajax2.default)({
	          type: "get",
	          url: "/recgoods/delrec",
	          data: { pid: text._id },
	          success: function success(data) {
	            alert("删除成功");
	            _this3.showAll();
	          }
	        });
	      };
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
	          "促销商品管理"
	        ),
	        _react2.default.createElement(_antd.Table, { dataSource: this.state.data, columns: this.state.columns, pagination: this.state.pagination })
	      );
	    }
	  }]);

	  return Recogoods;
	}(_react2.default.Component);

	exports.default = Recogoods;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(258); if (makeExportsHot(module, __webpack_require__(152))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Recogoods.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})