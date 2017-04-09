import React from "react";
import ReactDOM from "react-dom";
import ajax from "ajax";
import {Button,Form,Input,Upload,Icon,Modal} from "antd";
const FormItem = Form.Item;

class Addusers extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }
  submitForm(){
    this.props.form.validateFields((errors, values) => {
        if (!!errors) {
          console.log('Errors in form!!!');
          return;
        }
        // console.log('Submit!!!');
        console.log(values.username);
        ajax({
    			type:"get",
    			url:"/users/addusers",
    			data:{
            username:values.username,
            pwd:values.pwd,
            phonenumber:values.phonenumber,
            emil:values.emil
          },
    			success:function(data){
            // console.log(data);
    				this.setState({
              visible: false,
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
            this.props.showAll();
    			}.bind(this)
    		});

      });
  }
  showAdd(){
    this.setState({
      visible:true
    });
  }
  handleCancel() {
      this.setState({
        visible: false
      });
    }
    validateUsername(){
      return this.props.form.getFieldProps('username',{
        rules: [
            { required: true, min: 5, message: '用户名至少为 5 个字符' },
            {
              validator:function(rule, value, callback){
                console.log(value);
                if (!value) {
                callback();
              } else {
                ajax({
                  type:"get",
                  url:"/users/userstrue",
                  data:{username:value},
                  success:function(data){
                    if(data.mes == 0){
                      callback("用户名被占用");
                    }else{
                      callback();
                    }
                  }
                });
              }
              }
            }
          ]
      });
    }
    validatePwd(){
      return this.props.form.getFieldProps('pwd',{
        rules: [
            { required: true,  message: '密码至少为 6 个字符，并且只能有字母和数字组成',pattern:/^[0-9a-zA-Z]{6,20}$/ }
          ]
      });
    }
    validateConfirmPwd(){
      return this.props.form.getFieldProps('confirmPwd',{
        rules: [
            { required: true,  message: '格式不正确',pattern:/^[0-9a-zA-Z]{6,20}$/ },
            {
              validator:(rule, value, callback) => {
                if(this.props.form.getFieldValue("pwd") == value){
                  callback();
                }else{
                  callback("两次密码不一致");
                }
              }
            }
          ]
      });
    }
  render(){
     const {getFieldError, isFieldValidating } = this.props.form;

     const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
      };

    return (
      <div>
      <Button type="primary" onClick={this.showAdd.bind(this)}>增加</Button>
         <Modal title="增加用户" visible={this.state.visible}
                onOk={this.submitForm.bind(this)} onCancel={this.handleCancel.bind(this)}
             >

        <Form horizontal form={this.props.form}>
              <FormItem
                {...formItemLayout}
                label="用户名"
                hasFeedback
                help={isFieldValidating('username') ? '校验中...' : (getFieldError('username') || []).join(', ')}
              >
                <Input {...this.validateUsername()} type="text" placeholder="请输入用户名" />
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="密码"
                hasFeedback
                help={isFieldValidating('pwd') ? '校验中...' : (getFieldError('pwd') || []).join(', ')}
              >

                <Input {...this.validatePwd()} type="password"  placeholder="请输入密码" />
              </FormItem>
               <FormItem
                {...formItemLayout}
                label="确认密码"
                hasFeedback
                help={isFieldValidating('confirmPwd') ? '校验中...' : (getFieldError('confirmPwd') || []).join(', ')}
              >

                <Input {...this.validateConfirmPwd()} type="password"  placeholder="请输入确认密码" />
              </FormItem>
               <FormItem
                {...formItemLayout}
                label="电话号码"
              >

                <Input {...this.props.form.getFieldProps("phonenumber")} type="text"  placeholder="请输入电话号码" />
              </FormItem>
               <FormItem
                {...formItemLayout}
                label="电子邮箱"
              >

                <Input {...this.props.form.getFieldProps("emil")} type="text"  placeholder="请输入电子邮箱" />
              </FormItem>
            </Form>
            </Modal>
      </div>
    )
  }
}
export default Form.create()(Addusers);
