import React from "react";
import ReactDOM from "react-dom";
import ajax from "ajax";
import {Button,Form,Input,Upload,Icon,Modal,Table,Row,Col,rowSelection} from "antd";
const FormItem = Form.Item;

export default class Addrecogoods extends React.Component{
    constructor(props){
       super(props);
       this.state={
        selectedRowKeys:[],
   			selectedRows:[],
   			columns:[
   				{title:'商品名称',dataIndex:'name',key:'name'},
          {title:'商品图片',key:'main_img',
            render:(text,record) => {
              return (<img style={{width:70,height:70}} src={text.main_img} />)
            }
          }
   			],
   		};
   }
   submitForm(){
     //过滤之前已经有的促销商品，只增加新的促销商品
     var {selectedRows,sellData} = this.state;
     var addRows = [];
     for(var i = 0;i < selectedRows.length;i++){
       var flag = false;
       for(var j = 0;j < sellData.length;j++){
         if(selectedRows[i]._id == sellData[j]._id){
           flag = true;
         }
       }
       if(!flag){
         addRows.push(selectedRows[i]);
       }
     }

     ajax({
       type:"get",
       url:"/recgoods/addrec",
       data:{rec:JSON.stringify(addRows)},
       success:() => {
         this.setState({ visible:false});
         this.props.showAll();
       }
     });
   }

   //在增加的弹出框中显示商品
   showAllGoods(curpage){
     ajax({
       type:"get",
       url:"/goods/shows",
       data:{curpage:curpage},
       success:function(data){
         this.setState({
           data:data.data,
           pagination:{
             current:parseInt(data.curpage),
             total:data.count,
             pageSize:5,
             onChange:(curpage) => {
               this.showAllGoods(curpage);
             }
           }
         });
         //循环商品和促销的集合，将两者中共同存在的内容默认选中
         this.state.selectedRowKeys = [];
         for(var i = 0;i < data.data.length;i++){
           for(var j = 0;j < this.state.sellData.length;j++){
             if(data.data[i]._id == this.state.sellData[j]._id){
               this.state.selectedRowKeys.push(i);
             }
           }
         }
         this.setState({
           selectedRowKeys:this.state.selectedRowKeys
         });
       }.bind(this)
     });
   }

   showAllSellGoods(){
     ajax({
       type:"get",
       url:"/recgoods/showAllrec",
       success:function(data){
         var sellData = [];
         for(var i = 0;i < data.length;i++){
           sellData.push(data[i].goods);
         }
         this.setState({
           sellData:sellData
         });
         this.showAllGoods();
       }.bind(this)
     });
   }
   showAdd(){
     this.showAllSellGoods();
     this.setState({ visible:true});
   }
   handleCancel() {
       this.setState({ visible: false});
     }
  render(){
      const { selectedRowKeys } = this.state;
      const rowSelection = {
        selectedRowKeys,
       onChange:(selectedRowKeys, selectedRows) => {
         this.setState({
           selectedRowKeys,
           selectedRows
         });
       }
      };
  return(
    <div>
       <Button type="primary" onClick={this.showAdd.bind(this)}>增加</Button>
       <Modal title="选择商品" visible={this.state.visible} onOk={this.submitForm.bind(this)}     onCancel={this.handleCancel.bind(this)}>
         <Table  pagination={this.state.pagination} rowSelection={rowSelection} dataSource={this.state.data} columns={this.state.columns}></Table>
      </Modal>
    </div>
  )
 }
}
