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

	var _antd = __webpack_require__(262);

	var _Addusers = __webpack_require__(331);

	var _Addusers2 = _interopRequireDefault(_Addusers);

	var _ajax = __webpack_require__(332);

	var _ajax2 = _interopRequireDefault(_ajax);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// import classNames from 'classnames';
	var InputGroup = _antd.Input.Group;
	var SubMenu = _antd.Menu.SubMenu;
	var MenuItemGroup = _antd.Menu.ItemGroup;

	var User = function (_React$Component) {
	  _inherits(User, _React$Component);

	  function User(props) {
	    _classCallCheck(this, User);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(User).call(this, props));

	    _this.state = {
	      value: '',
	      // focus: false,
	      username: "",
	      phonenumber: "",
	      emil: "",
	      _id: "",
	      visible: false,
	      data: [],
	      pagination: {},
	      columns: [{ title: '用户名', dataIndex: 'username', key: 'username' }, { title: '电子邮箱', dataIndex: 'emil', key: 'emil' }, { title: '电话', dataIndex: 'phonenumber', key: 'phonenumber' }, { title: '操作', key: 'operation', render: function render(text, record) {
	          // console.log([text,record]);
	          return _react2.default.createElement(
	            "span",
	            null,
	            _react2.default.createElement(
	              _antd.Button,
	              { onClick: _this.showById(text).bind(_this) },
	              "修改"
	            ),
	            _react2.default.createElement(
	              _antd.Button,
	              { onClick: _this.del(text._id) },
	              "删除"
	            )
	          );
	        } }]
	    };
	    return _this;
	  }

	  _createClass(User, [{
	    key: "setusername",
	    value: function setusername(e) {
	      this.setState({
	        username: e.target.value
	      });
	    }
	  }, {
	    key: "setphonenumber",
	    value: function setphonenumber(e) {
	      this.setState({
	        phonenumber: e.target.value
	      });
	    }
	  }, {
	    key: "setemil",
	    value: function setemil(e) {
	      this.setState({
	        emil: e.target.value
	      });
	    }

	    // ---------------修改模态框-------------------------；
	    // showModal() {
	    //   this.setState({
	    //     visible: true,
	    //   });
	    // }

	    //修改用户信息（2）；

	  }, {
	    key: "handleOk",
	    value: function handleOk() {
	      this.setState({
	        visible: false
	      });
	      (0, _ajax2.default)({
	        type: "get",
	        url: "/users/updateusers",
	        data: {
	          username: this.state.username,
	          phonenumber: this.state.phonenumber,
	          emil: this.state.emil,
	          _id: this.state._id
	        },
	        success: function (data) {
	          alert("修改成功");
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

	    //----------------------------------------------------

	  }, {
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      this.showAll();
	    }

	    //后台显示所有用户的信息；

	  }, {
	    key: "showAll",
	    value: function showAll(curpage) {
	      (0, _ajax2.default)({
	        type: "get",
	        url: "/users/showsusers",
	        data: { curpage: curpage },
	        success: function (data) {
	          var _this2 = this;

	          console.log(data.data);
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

	    //后台删除用户信息；

	  }, {
	    key: "del",
	    value: function del(id) {
	      var that = this;
	      return function () {
	        (0, _ajax2.default)({
	          type: "get",
	          url: "/users/delusers",
	          data: { _id: id },
	          success: function success(data) {
	            alert("删除成功！！");
	            console.log(that);
	            that.showAll();
	          }
	        });
	      };
	    }

	    //修改用户信息；(1)

	  }, {
	    key: "showById",
	    value: function showById(text) {
	      return function () {
	        this.setState({
	          visible: true,
	          username: text.username,
	          phonenumber: text.phonenumber,
	          emil: text.emil,
	          _id: text._id,
	          value: '',
	          focus: false
	        });
	      };
	    }

	    //收索；----------------------------------

	  }, {
	    key: "handleInputChange",
	    value: function handleInputChange(e) {
	      this.setState({
	        value: e.target.value
	      });
	    }
	    // handleFocusBlur(e) {
	    //   this.setState({
	    //     focus: e.target === document.activeElement,
	    //   });
	    // }

	  }, {
	    key: "handleSearch",
	    value: function handleSearch() {
	      var that = this;
	      if (this.props.onSearch) {
	        this.props.onSearch(this.state.value);
	      }
	      (0, _ajax2.default)({
	        type: "get",
	        url: "/users/lookupusers",
	        data: { username: this.state.value },
	        success: function success(data) {
	          console.log(data);
	          //  that.showAll(data);
	        }
	      });
	    }
	    //--------------------------------------------------

	  }, {
	    key: "render",
	    value: function render() {
	      //----------------------------------------------
	      var _props = this.props;
	      var style = _props.style;
	      var size = _props.size;
	      var placeholder = _props.placeholder;
	      // const btnCls = classNames({
	      //   'ant-search-btn': true,
	      //   'ant-search-btn-noempty': !!this.state.value.trim(),
	      // });
	      // const searchCls = classNames({
	      //   'ant-search-input': true,
	      //   'ant-search-input-focus': this.state.focus,
	      // });

	      //----------------------------------------------

	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "h1",
	          { style: { color: "red", marginLeft: 300, marginBottom: 20 } },
	          "用户管理"
	        ),
	        _react2.default.createElement(_Addusers2.default, { showAll: this.showAll.bind(this) }),
	        _react2.default.createElement(
	          "div",
	          { className: "ant-search-input-wrapper", style: style },
	          _react2.default.createElement(
	            InputGroup,
	            { style: { width: 200, marginLeft: 150, marginTop: -40 } },
	            _react2.default.createElement(_antd.Input, { value: this.state.value, onChange: this.handleInputChange.bind(this),
	              style: { width: 200 } }),
	            _react2.default.createElement(
	              "div",
	              { className: "ant-input-group-wrap" },
	              _react2.default.createElement(_antd.Button, { icon: "search", size: size, onClick: this.handleSearch.bind(this) })
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          null,
	          _react2.default.createElement(
	            _antd.Modal,
	            { title: "第一个 Modal", visible: this.state.visible,
	              onOk: this.handleOk.bind(this), onCancel: this.handleCancel.bind(this)
	            },
	            _react2.default.createElement(
	              "p",
	              { style: { marginTop: 20 } },
	              "    用户名：",
	              _react2.default.createElement("input", { type: "text", value: this.state.username, onChange: this.setusername.bind(this) })
	            ),
	            _react2.default.createElement(
	              "p",
	              { style: { marginTop: 20 } },
	              "电话号码：",
	              _react2.default.createElement("input", { type: "text", value: this.state.phonenumber, onChange: this.setphonenumber.bind(this) })
	            ),
	            _react2.default.createElement(
	              "p",
	              { style: { marginTop: 20 } },
	              "电子邮箱：",
	              _react2.default.createElement("input", { type: "text", value: this.state.emil, onChange: this.setemil.bind(this) })
	            )
	          )
	        ),
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