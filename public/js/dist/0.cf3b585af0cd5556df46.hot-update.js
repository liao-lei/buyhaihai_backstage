webpackHotUpdate(0,{

/***/ 336:
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

	var _ajax = __webpack_require__(332);

	var _ajax2 = _interopRequireDefault(_ajax);

	var _antd = __webpack_require__(262);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FormItem = _antd.Form.Item;

	var Addrecogoods = function (_React$Component) {
	  _inherits(Addrecogoods, _React$Component);

	  function Addrecogoods(props) {
	    _classCallCheck(this, Addrecogoods);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Addrecogoods).call(this, props));

	    _this.state = {
	      selectedRowKeys: [],
	      selectedRows: [],
	      columns: [{ title: '商品名称', dataIndex: 'name', key: 'name' }, { title: '商品图片', key: 'main_img',
	        render: function render(text, record) {
	          return _react2.default.createElement("img", { style: { width: 70, height: 70 }, src: text.main_img });
	        }
	      }]
	    };
	    return _this;
	  }

	  _createClass(Addrecogoods, [{
	    key: "submitForm",
	    value: function submitForm() {
	      var _this2 = this;

	      //过滤之前已经有的促销商品，只增加新的促销商品
	      var _state = this.state;
	      var selectedRows = _state.selectedRows;
	      var sellData = _state.sellData;

	      var addRows = [];
	      for (var i = 0; i < selectedRows.length; i++) {
	        var flag = false;
	        for (var j = 0; j < sellData.length; j++) {
	          if (selectedRows[i]._id == sellData[j]._id) {
	            flag = true;
	          }
	        }
	        if (!flag) {
	          addRows.push(selectedRows[i]);
	        }
	      }

	      (0, _ajax2.default)({
	        type: "get",
	        url: "/recgoods/addrec",
	        data: { rec: JSON.stringify(addRows) },
	        success: function success() {
	          _this2.setState({
	            visible: false
	          });
	          _this2.props.showAll();
	        }
	      });
	    }

	    //在增加的弹出框中显示商品

	  }, {
	    key: "showAllGoods",
	    value: function showAllGoods(curpage) {
	      (0, _ajax2.default)({
	        type: "get",
	        url: "/goods/shows",
	        data: { curpage: curpage },
	        success: function (data) {
	          var _this3 = this;

	          this.setState({
	            data: data.data,
	            pagination: {
	              current: parseInt(data.curpage),
	              total: data.count,
	              pageSize: 5,
	              onChange: function onChange(curpage) {
	                _this3.showAllGoods(curpage);
	              }
	            }
	          });
	          //循环商品和促销的集合，将两者中共同存在的内容默认选中
	          this.state.selectedRowKeys = [];
	          for (var i = 0; i < data.data.length; i++) {
	            for (var j = 0; j < this.state.sellData.length; j++) {
	              if (data.data[i]._id == this.state.sellData[j]._id) {
	                this.state.selectedRowKeys.push(i);
	              }
	            }
	          }
	          this.setState({
	            selectedRowKeys: this.state.selectedRowKeys
	          });
	        }.bind(this)
	      });
	    }
	  }, {
	    key: "showAllSellGoods",
	    value: function showAllSellGoods() {
	      (0, _ajax2.default)({
	        type: "get",
	        url: "/recgoods/showrec",
	        success: function (data) {
	          var sellData = [];
	          for (var i = 0; i < data.length; i++) {
	            sellData.push(data[i].goods);
	          }
	          this.setState({
	            sellData: sellData
	          });
	          this.showAllGoods();
	        }.bind(this)
	      });
	    }
	  }, {
	    key: "showAdd",
	    value: function showAdd() {
	      this.showAllSellGoods();
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
	    key: "render",
	    value: function render() {
	      var _this4 = this;

	      var selectedRowKeys = this.state.selectedRowKeys;

	      var rowSelection = { selectedRowKeys: selectedRowKeys,
	        onChange: function onChange(selectedRowKeys, selectedRows) {
	          _this4.setState({
	            selectedRowKeys: selectedRowKeys,
	            selectedRows: selectedRows
	          });
	        }
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
	          { title: "选择商品", visible: this.state.visible, onOk: this.submitForm.bind(this), onCancel: this.handleCancel.bind(this) },
	          _react2.default.createElement(_antd.Table, { pagination: this.state.pagination, rowSelection: rowSelection, dataSource: this.state.data, columns: this.state.columns })
	        )
	      );
	    }
	  }]);

	  return Addrecogoods;
	}(_react2.default.Component);

	exports.default = Addrecogoods;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(258); if (makeExportsHot(module, __webpack_require__(152))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Addrecogoods.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})