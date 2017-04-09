import React from "react";
import {Button,Form,Input,Upload,Icon,Modal} from "antd";
import ajax from "ajax";

const FormItem = Form.Item;
class Updategoods extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data:{},
			indexImgList:[],
			indexImgPath:[],
			datailImgList:[],
			datailImgPath:[]
		};

	}
	submitForm(){
		if(this.state.indexImgPath.length > 0){
			this.state.data.main_img = this.state.indexImgPath;
		}
		if(this.state.datailImgPath.length > 0){
			this.state.data.datail_img = this.state.datailImgPath;
		}
		ajax({
			type:"get",
			url:"/goods/update",
			data:this.state.data,
			success:() => {
				//将上传列表清空
				this.state.indexImgList = [];
				this.state.indexImgPath = [];
				this.state.datailImgList = [];
				this.state.datailImgPath = [];
				this.props.showAll();
				this.props.closeModal();
			}
		});
	}
	componentWillReceiveProps(newProps){
		this.setState({
			data:newProps.updateData
		});
	}
	changeName(e){
		this.state.data.name = e.target.value;
		this.setState({
			data:this.state.data
		});
	}
	changePrice(e){
		this.state.data.price = e.target.value;
		this.setState({
			data:this.state.data
		});
	}
  changeyPrice(e){
    this.state.data.yprice = e.target.value;
    this.setState({
      data:this.state.data
    });
  }
	handleCancel() {
    	this.props.closeModal();
  	}
  	fieldProps(name){
  		return this.props.form.getFieldProps(name);
  	}
	render(){
		const formItemLayout = {
			labelCol: { span: 6 },
			wrapperCol: { span: 14 },
    	};
    	const props = {
				action: '/goods/upload',
				listType: 'picture',
				multiple:true,
				onChange:function(data){
					let fileList = data.fileList;
				 	let indexPath = fileList.map(function(file){
				 		return file.response;
				 	});
				    this.setState({
				    	indexImgList:fileList,
				    	indexImgPath:indexPath
				    });
				}.bind(this)
			};
			const props1 = {
				action: '/goods/upload',
				listType: 'picture',
				multiple:true,
				onChange:function(data){
					let fileList = data.fileList;
					let indexPath = fileList.map(function(file){
						return file.response;
					});
						this.setState({
							datailImgList:fileList,
							datailImgPath:indexPath
						});
				}.bind(this)
			};
		return (
			<div>
				 <Modal title="修改商品" visible={this.props.visible}
          			onOk={this.submitForm.bind(this)} onCancel={this.handleCancel.bind(this)} >

				<Form horizontal >
			        <FormItem  {...formItemLayout}  label="修改的商品名称">
			              <Input {...this.fieldProps("name")} onChange={this.changeName.bind(this)} value={this.state.data.name} type="text" placeholder="请输入商品名称" />
			        </FormItem>

			        <FormItem  {...formItemLayout} label="写改现价">
			          <Input {...this.fieldProps("price")} onChange={this.changePrice.bind(this)} value={this.state.data.price} type="text"  placeholder="请输入商品价格" />
			        </FormItem>

              <FormItem  {...formItemLayout} label="修改原价">
                <Input {...this.fieldProps("price")} onChange={this.changeyPrice.bind(this)} value={this.state.data.yprice} type="text"  placeholder="请输入原来的商品价格" />
              </FormItem>

			        <FormItem  {...formItemLayout} label="修改首页图片">
    			        <Upload {...props} fileList={this.state.indexImgList} className="upload-list-inline">
        				      <Button type="ghost">
        				        <Icon type="upload" /> 点击上传
        				      </Button>
    				      </Upload>
				     </FormItem>

						 <FormItem  {...formItemLayout} label="修改详情页页图片">
								<Upload {...props1} fileList={this.state.datailImgList} className="upload-list-inline">
										<Button type="ghost">
											<Icon type="upload" /> 点击上传
										</Button>
								</Upload>
					 </FormItem>
		        </Form>
		        </Modal>
			</div>
		)
	}
}
export default Form.create()(Updategoods);
