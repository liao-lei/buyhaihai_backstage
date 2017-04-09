import React from "react";
import ReactDOM from "react-dom";
import Index from "Index";
import Login from "Login";
import Backpages from "Backpages";
import Backleft from "Backleft";
import Backright from "Backright";
import Showsusers from "Showsusers";
import Limittime from "Limittime";
import Twoarea from "Twoarea";
import Recogoods from "Recogoods";
import Goodlist from "Goodlist";
import Orderinfo from "Orderinfo";

import {Router,Route,IndexRoute,hashHistory,browserHistory} from "react-router";

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Index}>
		  	<IndexRoute component={Login}></IndexRoute>
		  	<Route path="/login" component={Login}></Route>
		  	<Route path="/backpages" component={Backpages}>
						<Route path="/showsusers" component={Showsusers}></Route>
						<Route path="/limittime" component={Limittime}></Route>
						<Route path="/twoarea" component={Twoarea}></Route>
						<Route path="/recogoods" component={Recogoods}></Route>
						<Route path="/goodlist" component={Goodlist}></Route>
						<Route path="/orderinfo" component={Orderinfo}></Route>
        </Route>
		</Route>
	</Router>,
	document.getElementById("contect")
);
