import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router";
import {Table,Row,Col,Button,Menu,Icon,Card} from "antd";
import {hashHistory} from "react-router";
import ajax from "ajax";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Backheader extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username:""
    };
  }
  isLogin(){
    ajax({
      url:"/users/getUser",
      type:"get",
      success:(data) => {
        if(!data.username){
          hashHistory.push("/login");
        }else{
          this.setState({
            username:data.username
          });
        }
      }
    });
  }
  logout(){
		ajax({
			url:"/users/logout",
			type:"get",
			success:(data) => {
				hashHistory.push("/login");
			}
		});
	}
  componentWillMount(){
    this.isLogin();
  }
  componentWillReceiveProps(){
    this.isLogin();
  }
  render(){
    return (
      <div>
        <Row>
          <Row style={{height:20}}></Row>
          <Col span={22} offset={1} style={{background:"#33ffcc",height:80,borderTopLeftRadius:10,borderTopRightRadius:10}}>
               <Row style={{height:10}}></Row>
               <Col span={4}><img src="../../img/logo.png" style={{height:50}}/></Col>
               <Col span={5} offset={4} style={{fontSize:30,color:"red",marginTop:10}}>后台数据管理界面</Col>
               <Col offset={20} span={4} style={{color:"red",marginTop:-35,fontSize:18}}>
                 <span>{this.state.username}</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span onClick={this.logout}>注销</span>
               </Col>
               {/*<Col span={2} offset={1} style={{color:"red",marginTop:-30}} ><Link to="/login">登陆</Link></Col>*/}
          </Col>
        </Row>
      </div>
    );
  }
}
