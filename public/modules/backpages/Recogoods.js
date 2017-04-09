import React from "react";
import ReactDOM from "react-dom";
import {Table,Button,Menu,Icon,Modal,Input} from "antd";
import Addrecogoods from "./Addrecogoods";
import ajax from "ajax";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const InputGroup = Input.Group;


export default class Recogoods extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:[],
      pagination:{},
      columns:[
        {title:'商品名称',dataIndex:'goods.name',key:'goods.name'},
        {title:'商品现价',dataIndex:'goods.price',key:'goods.price'},
        {title:'商品原价',dataIndex:'goods.yprice',key:'goods.yprice'},
        {title:'商品图片',key:'goods.main_img',
             render:(text,record) =>{
               return  <img style={{width:70,height:70}} src={text.goods.main_img} />
             }
          },
        {title:'操作',key:'operation',render:(text,record) => {
          return (
            <span>
              <Button onClick={this.delrec(text)}>删除</Button>
            </span>
          )
        }}
      ]
    }
  }
  componentWillMount(){
    this.showAll();
  }
  //显示所有推荐商品的信息；
  showAll(curpage){
    ajax({
      type:"get",
      url:"/recgoods/showrec",
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

  //删除促销的商品；
  delrec(text){
    return ()=>{
      ajax({
        type:"get",
        url:"/recgoods/delrec",
        data:{pid:text._id},
        success:(data) => {
          alert(data);
          this.showAll();
        }
      })
    }
  }


  render(){
    const { style, size, placeholder } = this.props;
    return(
      <div>
          <h1 style={{marginLeft:300,color:"red"}}>推荐商品管理</h1>
    {/*添加促销商品*/}
          <Addrecogoods showAll={this.showAll.bind(this)}/>
    {/*显示促销商品 */}
          <Table dataSource={this.state.data} columns={this.state.columns} pagination={this.state.pagination}></Table>
      </div>
    );
  }
}
