import React from "react";
import ReactDOM from "react-dom";
import ajax from "ajax";
import { Button, Form, Input,Row, Col, Card,Modal} from 'antd';
import {hashHistory} from "react-router";
const createForm = Form.create;
const FormItem = Form.Item;

class Login extends React.Component{
	constructor(props){
		super(props);
	}
	submitForm(){
		var values = this.props.form.getFieldsValue();
		ajax({
			type:"post",
			url:"/users/login",
			data:values,
			success:function(data){
				if(data.mes == 1){
					hashHistory.push("/backpages");
				}else{
					Modal.error({
							title: '登录失败',
							content: '请检查用户名或密码是否正确',
					 });
				}
			}
		});
	}
	fieldProps(name){
			return this.props.form.getFieldProps(name);
		}
	render(){
		const formItemLayout = {
					labelCol: { span: 6 },
					wrapperCol: { span: 14 },
			};
		return (
			<Row>
		    <Col span={12} offset={6}>
		  	<Row style={{height:150}}></Row>
	  		<Card style={{background:"#33ffcc",height:400}}>
					<h2 style={{marginTop:20,marginLeft:200,marginBottom:50,color:"red"}}>购嗨嗨管理界面登录</h2>
					<Form horizontal>
								<FormItem {...formItemLayout}	label="用户名">
									 <Input {...this.fieldProps("username")} type="text" placeholder="请输入密码" />
								</FormItem>

								<FormItem {...formItemLayout}	label="密码">
									<Input {...this.fieldProps("pasd")}  type="password"  placeholder="请输入密码" />
								</FormItem>

								<FormItem wrapperCol={{ span: 16, offset: 10 }} style={{ marginTop: 50 }}>
									<Button type="primary" onClick={this.submitForm.bind(this)}>确定</Button>
								</FormItem>
							</Form>
	      </Card>
	      </Col>
	      </Row>
			)
	}
}
export default Form.create()(Login);
