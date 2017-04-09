import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router";
import { Menu, Icon, Switch,Modal,Button } from 'antd';
const SubMenu = Menu.SubMenu;

export default class Backpages extends React.Component{
        constructor(props){
          super(props);
          this.state={
             theme: 'light',
          };
        }
        changeTheme(value) {
         this.setState({
           theme: value ? 'dark' : 'light',
         });
       }
       handleClick(e) {
         console.log('click ', e);
         this.setState({
           current: e.key,
         });
       }

      render() {
        return (
          <div style={{background:"#BCD2EE",height:500,paddingLeft:10}}>
            <Switch onChange={this.changeTheme.bind(this)} checkedChildren="暗" unCheckedChildren="亮" />
            <br />
            <br />
            <Menu theme={this.state.theme}
              onClick={this.handleClick.bind(this)}
              style={{ width: 240 }}
              defaultOpenKeys={['sub1']}
              selectedKeys={[this.state.current]}
              mode="inline"
            >
              <SubMenu key="sub1" title={<span><Icon type="user" /><span>用户信息</span></span>}>
                <Menu.Item key="13"><Link to="/showsusers">显示所有用户信息</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>商品推荐信息</span></span>}>
                <Menu.Item key="5"><Link to="/limittime">限时秒杀</Link></Menu.Item>
                <Menu.Item key="6"><Link to="/twoarea">两元限购区</Link></Menu.Item>
                <Menu.Item key="7"><Link to="/recogoods">推荐商品</Link></Menu.Item>
                <Menu.Item key="8"><Link to="/goodlist">商品列表</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="inbox" /><span>订单信息</span></span>}>
                <Menu.Item key="9"><Link to="/orderinfo">查看订单信息</Link></Menu.Item>
              </SubMenu>
            </Menu>
          </div>
        );
      }

}
