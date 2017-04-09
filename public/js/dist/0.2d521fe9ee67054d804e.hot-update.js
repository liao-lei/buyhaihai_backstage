webpackHotUpdate(0,{

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(77), RootInstanceProvider = __webpack_require__(85), ReactMount = __webpack_require__(87), React = __webpack_require__(152); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	var ajax = function ajax(params) {
	    var paramStr = "";
	    var fetchObj;
	    for (var key in params.data) {
	        paramStr += key + "=" + params.data[key] + "&";
	    }
	    if (params.type != "post" && params.type != "POST") {
	        params.url += "?" + paramStr;
	        fetchObj = fetch(params.url, { credentials: 'include' });
	    } else {
	        fetchObj = fetch(params.url, {
	            method: "post",
	            headers: { "Content-Type": "application/x-www-form-urlencoded" },
	            body: paramStr,
	            credentials: 'include'
	        });
	    }
	    fetchObj.then(function (res) {
	        if (res.ok) {
	            res.text().then(function (data) {
	                try {
	                    params.success(JSON.parse(data));
	                } catch (e) {
	                    console.log(e);
	                    params.success(data);
	                }
	            });
	        }
	    });
	};
	module.exports = ajax;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(258); if (makeExportsHot(module, __webpack_require__(152))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ajax.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

})