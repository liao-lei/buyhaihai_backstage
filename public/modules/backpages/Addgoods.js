import React from "react";
import ReactDOM from "react-dom";
import {Button,Form,Icon,Modal,Input,Upload} from "antd";
import ajax from "ajax";

const FormItem = Form.Item;

class Addgoods extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      indexImgList:[],
      indexImgPath:[],
      datailImgList:[],
      datailImgPath:[]
    };
  }

submitForm(){
  var values = this.props.form.getFieldsValue();
  //将上传图片的路径保存在values中。
  values.main_img = this.state.indexImgPath;
  values.datail_img = this.state.datailImgPath;
  ajax({
    type:"get",
    url:"/goods/add",
    data:values,
    success:() => {
      this.setState({
        visible:false
      });
      this.props.showAll();
    }
  });
}

    showAdd(){
      this.setState({
        visible:true
      });
    }
  handleCancel() {
    this.setState({ visible: false,indexImgList:[],indexImgPath:[] });
    this.setState({ visible: false,datailImgList:[],datailImgPath:[] });
   }
  fieldProps(name){
    return this.props.form.getFieldProps(name);
  }

  render(){
     const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
      };
      //上传首页图片
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
              indexImgPath:indexPath,
            });
        }.bind(this)
      };
      //上传详情页图片；
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
      <Button type="primary" onClick={this.showAdd.bind(this)}>增加</Button>
          <Modal title="增加商品" visible={this.state.visible} onOk={this.submitForm.bind(this)} onCancel={this.handleCancel.bind(this)}>
                  <Form horizontal >
                          <FormItem  {...formItemLayout} label="商品名称">
                                <Input {...this.fieldProps("name")} type="text" placeholder="请输入商品名称" />
                          </FormItem>

                          <FormItem  {...formItemLayout} label="价格">
                                <Input {...this.fieldProps("price")} type="text" placeholder="请商品价格" />
                          </FormItem>

                          <FormItem {...formItemLayout} label="原价格">
                                <Input {...this.fieldProps("yprice")} type="text"  placeholder="请商品原来价格" />
                          </FormItem>

                          <FormItem {...formItemLayout}  label="上传首页图片">
                                <Upload {...props} fileList={this.state.indexImgList} className="upload-list-inline">
                                    <Button type="ghost">
                                      <Icon type="upload" /> 点击上传
                                    </Button>
                                </Upload>
                        </FormItem>

                        <FormItem {...formItemLayout}  label="上传详情页图片">
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
export default Form.create()(Addgoods);
