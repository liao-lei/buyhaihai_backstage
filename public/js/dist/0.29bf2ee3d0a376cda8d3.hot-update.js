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

	var _antd = __webpack_require__(262);

	var _ajax = __webpack_require__(332);

	var _ajax2 = _interopRequireDefault(_ajax);

	var _Addgoods = __webpack_require__(338);

	var _Addgoods2 = _interopRequireDefault(_Addgoods);

	var _Updategoods = __webpack_require__(339);

	var _Updategoods2 = _interopRequireDefault(_Updategoods);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SubMenu = _antd.Menu.SubMenu;
	var MenuItemGroup = _antd.Menu.ItemGroup;

	var Lookadv = function (_React$Component) {
	  _inherits(Lookadv, _React$Component);

	  function Lookadv(props) {
	    _classCallCheck(this, Lookadv);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Lookadv).call(this, props));

	    _this.state = {
	      visible: false,
	      updateVisible: false,
	      updateData: {},
	      data: [],
	      pagination: {},
	      columns: [{ title: '商品名称', dataIndex: 'name', key: 'name' }, { title: '商品现价', dataIndex: 'price', key: 'price' }, { title: '商品原价', dataIndex: 'yprice', key: 'yprice' }, { title: '商品图片', key: 'main_img',
	        render: function render(text, record) {
	          return _react2.default.createElement("img", { style: { width: 70, height: 70 }, src: text.main_img });
	          {/*<img style={{width:70,height:70}} src={text.main_img ? text.main_img[0] : ''} />*/}
	        }
	      }, { title: '操作', key: 'operation', render: function render(text, record) {
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
	              { onClick: _this.del(text) },
	              "删除"
	            )
	          );
	        } }]
	    };
	    return _this;
	  }

	  //将要加载时调用showAll；


	  _createClass(Lookadv, [{
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      this.showAll();
	    }

	    //后台显示所有商品的信息；

	  }, {
	    key: "showAll",
	    value: function showAll(curpage) {
	      var _this2 = this;

	      (0, _ajax2.default)({
	        type: "get",
	        url: "/goods/shows",
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

	    //后台删除商品信息

	  }, {
	    key: "del",
	    value: function del(text) {
	      var _this3 = this;

	      return function () {
	        (0, _ajax2.default)({
	          type: "get",
	          url: "/goods/del",
	          data: { _id: text._id },
	          success: function success(data) {
	            alert(data);
	            _this3.showAll();
	          }
	        });
	      };
	    }

	    //修改（1）

	  }, {
	    key: "showById",
	    value: function showById(text) {
	      var _this4 = this;

	      return function () {
	        _this4.setState({
	          updateVisible: true,
	          updateData: text
	        });
	      };
	    }
	    //关闭模态框；

	  }, {
	    key: "closeModal",
	    value: function closeModal() {
	      this.setState({
	        updateVisible: false
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "h1",
	          { style: { color: "red", marginTop: 20, marginLeft: 350 } },
	          "商品列表管理"
	        ),
	        _react2.default.createElement(_Addgoods2.default, { showAll: this.showAll.bind(this) }),
	        _react2.default.createElement(_Updategoods2.default, { updateData: this.state.updateData, showAll: this.showAll.bind(this), closeModal: this.closeModal.bind(this), visible: this.state.updateVisible }),
	        _react2.default.createElement(_antd.Table, { dataSource: this.state.data, columns: this.state.columns, pagination: this.state.pagination })
	      );
	    }
	  }]);

	  return Lookadv;
	}(_react2.default.Component);

	exports.default = Lookadv;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(258); if (makeExportsHot(module, __webpack_require__(152))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Lookadv.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },

/***/ 339:
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

	var _antd = __webpack_require__(262);

	var _ajax = __webpack_require__(332);

	var _ajax2 = _interopRequireDefault(_ajax);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FormItem = _antd.Form.Item;

	var Updategoods = function (_React$Component) {
		_inherits(Updategoods, _React$Component);

		function Updategoods(props) {
			_classCallCheck(this, Updategoods);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Updategoods).call(this, props));

			_this.state = {
				data: {},
				indexImgList: [],
				indexImgPath: []
			};

			return _this;
		}

		_createClass(Updategoods, [{
			key: "submitForm",
			value: function submitForm() {
				var _this2 = this;

				if (this.state.indexImgPath.length > 0) {
					this.state.data.index_img = this.state.indexImgPath;
				}
				(0, _ajax2.default)({
					type: "get",
					url: "/goods/update",
					data: this.state.data,
					success: function success() {
						//将上传列表清空
						_this2.state.indexImgList = [];
						_this2.state.indexImgPath = [];
						_this2.props.showAll();
						_this2.props.closeModal();
					}
				});
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(newProps) {
				this.setState({
					data: newProps.updateData
				});
			}
		}, {
			key: "changeName",
			value: function changeName(e) {
				this.state.data.name = e.target.value;
				this.setState({
					data: this.state.data
				});
			}
		}, {
			key: "changePrice",
			value: function changePrice(e) {
				this.state.data.price = e.target.value;
				this.setState({
					data: this.state.data
				});
			}
		}, {
			key: "changeyPrice",
			value: function changeyPrice(e) {
				this.state.data.yprice = e.target.value;
				this.setState({
					data: this.state.data
				});
			}
		}, {
			key: "handleCancel",
			value: function handleCancel() {
				this.props.closeModal();
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
					action: '/product/upload',
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
						_antd.Modal,
						{ title: "修改商品", visible: this.props.visible,
							onOk: this.submitForm.bind(this), onCancel: this.handleCancel.bind(this)
						},
						_react2.default.createElement(
							_antd.Form,
							{ horizontal: true },
							_react2.default.createElement(
								FormItem,
								_extends({}, formItemLayout, { label: "商品名称" }),
								_react2.default.createElement(_antd.Input, _extends({}, this.fieldProps("name"), { onChange: this.changeName.bind(this), value: this.state.data.name, type: "text", placeholder: "请输入商品名称" }))
							),
							_react2.default.createElement(
								FormItem,
								_extends({}, formItemLayout, { label: "价格" }),
								_react2.default.createElement(_antd.Input, _extends({}, this.fieldProps("price"), { onChange: this.changePrice.bind(this), value: this.state.data.price, type: "text", placeholder: "请输入商品价格" }))
							),
							_react2.default.createElement(
								FormItem,
								_extends({}, formItemLayout, { label: "原价格" }),
								_react2.default.createElement(_antd.Input, _extends({}, this.fieldProps("price"), { onChange: this.changeyPrice.bind(this), value: this.state.data.yprice, type: "text", placeholder: "请输入原来的商品价格" }))
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

		return Updategoods;
	}(_react2.default.Component);

	exports.default = _antd.Form.create()(Updategoods);

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(258); if (makeExportsHot(module, __webpack_require__(152))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Updategoods.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})