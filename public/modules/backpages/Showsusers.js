import React from "react";
import {Table,Row,Col,Button,Menu,Icon,Modal,Input} from "antd";
import Addusers from "./Addusers";
import ajax from "ajax";
// import classNames from 'classnames';
const InputGroup = Input.Group;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export default class User extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			value: '',
      // focus: false,
      username:"",
      phonenumber:"",
      emil:"",
      _id:"",
      visible: false,
			data:[],
			pagination:{},
			columns:[
				{title:'用户名',dataIndex:'username',key:'username'},
				{title:'电子邮箱',dataIndex:'emil',key:'emil'},
				{title:'电话',dataIndex:'phonenumber',key:'phonenumber'},
				{title:'操作',key:'operation',render:(text,record) => {
					// console.log([text,record]);
					return (
						<span>
							<Button  onClick={this.showById(text).bind(this)}>修改</Button>
							<Button  onClick={this.del(text._id)}>删除</Button>
						</span>
					)
				}}
			]
		}
	}

  setusername(e){
    this.setState({
      username:e.target.value
    })
  }
  setphonenumber(e){
    this.setState({
      phonenumber:e.target.value
    })
  }
  setemil(e){
    this.setState({
      emil:e.target.value
    })
  }

  // ---------------修改模态框-------------------------；
  // showModal() {
  //   this.setState({
  //     visible: true,
  //   });
  // }

  //修改用户信息（2）；
  handleOk() {
   this.setState({
     visible: false,
   });
   ajax({
     type:"get",
     url:"/users/updateusers",
     data:{
       username:this.state.username,
       phonenumber:this.state.phonenumber,
       emil:this.state.emil,
       _id:this.state._id
     },
     success:function(data){
      alert("修改成功");
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

  //----------------------------------------------------
	componentWillMount(){
		this.showAll();
	}

  //后台显示所有用户的信息；
	showAll(curpage){
		ajax({
			type:"get",
			url:"/users/showsusers",
			data:{curpage:curpage},
			success:function(data){
				console.log(data.data);
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
			}.bind(this)
		});
	}

  //后台删除用户信息；
  del(id){
    var that=this;
    return function(){
      ajax({
        type:"get",
        url:"/users/delusers",
        data:{_id:id},
        success:function(data){
         alert("删除成功！！");
         console.log(that);
         that.showAll();
       }
      });
		}
  }

 //修改用户信息；(1)
	showById(text){
		return function(){
      this.setState({
        visible: true,
        username:text.username,
        phonenumber:text.phonenumber,
        emil:text.emil,
        _id:text._id,
				value: '',
		    focus: false,
      });
     }
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
				url:"/users/lookupusers",
				data:{username:this.state.value},
				success:function(data){
					that.setState({
						data:data
					})
				console.log(data)
				//  that.showAll();
			 }
			});
	  }
   //--------------------------------------------------
	render(){
		//----------------------------------------------
		const { style, size, placeholder } = this.props;
    // const btnCls = classNames({
    //   'ant-search-btn': true,
    //   'ant-search-btn-noempty': !!this.state.value.trim(),
    // });
    // const searchCls = classNames({
    //   'ant-search-input': true,
    //   'ant-search-input-focus': this.state.focus,
    // });

		//----------------------------------------------
		return (
			<div>
				<h1 style={{color:"red",marginLeft:300,marginBottom:20}}>用户管理</h1>
				<Addusers showAll={this.showAll.bind(this)}/>

				<div className="ant-search-input-wrapper" style={style}>
	        <InputGroup style={{width:200,marginLeft:150,marginTop:-40}}>
	          <Input value={this.state.value} onChange={this.handleInputChange.bind(this)}
	         style={{width:200}} onBlur={this.handleFocusBlur.bind(this)} />
	          <div className="ant-input-group-wrap">
	            <Button icon="search"  size={size} onClick={this.handleSearch.bind(this)} />
	          </div>
	        </InputGroup>
        </div>

        <div>
        <Modal title="修改用户信息" visible={this.state.visible}
          onOk={this.handleOk.bind(this)} onCancel={this.handleCancel.bind(this)}>
          <p style={{marginTop:20}}>&nbsp;&nbsp;&nbsp;&nbsp;用户名：<input type="text" value={this.state.username} onChange={this.setusername.bind(this)} /></p>
          <p style={{marginTop:20}}>电话号码：<input type="text" value={this.state.phonenumber} onChange={this.setphonenumber.bind(this)}/></p>
          <p style={{marginTop:20}}>电子邮箱：<input type="text" value={this.state.emil} onChange={this.setemil.bind(this)}/></p>
        </Modal>
        </div>
				<Table dataSource={this.state.data} columns={this.state.columns} pagination={this.state.pagination}></Table>
			</div>
		)
	}
}
