import React from "react";
import ReactDOM from "react-dom";
import {Table,Button,Menu,Icon,Modal,Input} from "antd";
import ajax from "ajax";
import Addgoods from "./Addgoods";
import Updategoods from "./Updategoods";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const InputGroup = Input.Group;

export default class Lookadv extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value:"",
      visible:false,
      updateVisible:false,
      updateData:{},
      data:[],
      pagination:{},
      columns:[
        {title:'商品名称',dataIndex:'name',key:'name'},
        {title:'商品现价',dataIndex:'price',key:'price'},
        {title:'商品原价',dataIndex:'yprice',key:'yprice'},
        {title:'商品图片',key:'main_img',
             render:(text,record) =>{
               
               return  <img style={{width:70,height:70}} src={text.main_img ?text.main_img[0]:''} />
             }
          },
        {title:'操作',key:'operation',render:(text,record) => {
          return (
            <span>
              <Button onClick={this.showById(text)}>修改</Button>
              <Button onClick={this.del(text)}>删除</Button>
            </span>
          )
        }}
      ]
    }
  }

  //将要加载时调用showAll；
  componentWillMount(){
    this.showAll();
  }

  //后台显示所有商品的信息；
  showAll(curpage){
    ajax({
      type:"get",
      url:"/goods/shows",
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

//后台删除商品信息
del(text){
  return ()=>{
    ajax({
      type:"get",
      url:"/goods/del",
      data:{_id:text._id},
      success:(data) => {
        alert(data)
        this.showAll();
      }
    })
  }
}

//修改（1）
showById(text){
  return () => {
    this.setState({
      updateVisible:true,
      updateData:text
    });
  }
}
//关闭模态框；
closeModal(){
  this.setState({
    updateVisible:false
  });
}
//收索；----------------------------------
handleInputChange(e) {
  this.setState({
    value: e.target.value,
  });
}
handleFocusBlur(e) {
  this.setState({
    focus: e.target === document.activeElement,
  });
  if(!this.state.value){
    this.showAll();
  }
}
handleSearch() {
  var that=this;
  if (this.props.onSearch) {
    this.props.onSearch(this.state.value);
  }
  ajax({
    type:"get",
    url:"/goods/lookup",
    data:{name:this.state.value},
    success:function(data){
      that.setState({
        data:data
      })
   }
  });
}
//--------------------------------------------------

  render(){
    const { style, size, placeholder } = this.props;
    return(
        <div>
          <h1 style={{color:"red",marginLeft:350}}>商品列表管理</h1>
{/*增加商品*/}
          <Addgoods showAll={this.showAll.bind(this)} />
{/*搜索商品*/}
          <div className="ant-search-input-wrapper" style={style}>
  	        <InputGroup style={{width:200,marginTop:5}}>
  	          <Input value={this.state.value} onChange={this.handleInputChange.bind(this)}
  	         style={{width:200}} onBlur={this.handleFocusBlur.bind(this)} />
  	          <div className="ant-input-group-wrap">
  	            <Button icon="search"  size={size} onClick={this.handleSearch.bind(this)} />
  	          </div>
  	        </InputGroup>
          </div>
{/*修改商品*/}
          <Updategoods updateData={this.state.updateData}  showAll={this.showAll.bind(this)} closeModal={this.closeModal.bind(this)} visible={this.state.updateVisible}/>
{/*显示商品*/}
          <Table dataSource={this.state.data} columns={this.state.columns} pagination={this.state.pagination}></Table>
        </div>
    );
  }
}
