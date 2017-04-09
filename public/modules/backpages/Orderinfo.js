import React from "react";
import ReactDOM from "react-dom";
import {Table,Button,Menu,Icon,Modal,Input} from "antd";
import ajax from "ajax";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const InputGroup = Input.Group;

export default class Orderinfo extends React.Component{
            constructor(props){
              super(props);
              this.state={
                  visible: false,
                  data:[],
                  type:"",
                  _id:"",
                  pagination:{},
                  columns:[
                    {title: '收货人',dataIndex: 'users.username',key:'users.username'},
                    {title: '电话号码',dataIndex: 'users.phonenumber', key: 'users.phonenumber'},
                    {title: '收货地址',dataIndex: 'addr',key: 'addr'},
                    {title: '货物状态',dataIndex: 'type',key: 'type'},
                    {title: '操作',key: 'operation',
                        render: (text, record) => {
                        return(
                          <span>
                            <button  onClick={this.update(text).bind(this)}>修改订单</button>
                          </span>
                        )}
                      }
                      ]
                  }
            }
            //将要加载时调用showAll；
            componentWillMount(){
              this.showAll();
            }

            //后台显示所有商品的订单；
            showAll(curpage){
              ajax({
                type:"get",
                url:"/order/showsorder",
                data:{curpage:curpage},
                success:(data) => {
                  this.setState({
                    data:data.data,
                    pagination:{
                      current:parseInt(data.curpage),
                      total:data.count,
                      pageSize:5,
                      showQuickJumper:true,
                      onChange:(curpage) => {
                        this.showAll(curpage);
                      }
                    }
                  });
                }
              });
            }
            update(text){
              var that=this;
              return ()=>{
                this.setState({
                  visible: true,
                  type:text.type,
                  _id:text._id
                   });
              }
            }
            setType(event){
              this.setState({
                type:event.target.value
              })
            }

            handleOk() {
                ajax({
                  type:"get",
                  url:"/order/updateorder",
                  data:{
                    type:this.state.type,
                    _id:this.state._id
                  },
                  success:function(data){
                     this.setState({
                        visible: false,
                       });
                         this.showAll();
                  }.bind(this)
                })
            }
            handleCancel(e) {
              console.log(e);
              this.setState({
                visible: false,
              });
            }

    render(){

      return(
        <div>
            <div>
               <Modal title="修改订单" visible={this.state.visible}
                 onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)}>
                   <p >订单状态：<input type="text"  value={this.state.type} onChange={this.setType.bind(this)}/></p>
               </Modal>
            </div>
            <Table dataSource={this.state.data} columns={this.state.columns} pagination={this.state.pagination}></Table>
       </div>
      );
  }
}
