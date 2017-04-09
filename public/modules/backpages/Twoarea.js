import React from "react";
import ReactDOM from "react-dom";
import { Upload, Icon, Modal,Col,Row,Input,Button } from 'antd';


export default class Twoarea extends React.Component{
  constructor(props){
    super(props);
    this.state={
      priviewVisible: false,
      priviewImage: '',
    };
  }
  handleCancel() {
   this.setState({
     priviewVisible: false,
   });
 }

  render(){
        const props = {
          action: '/upload.do',
          listType: 'picture-card',
          defaultFileList: [{
            uid: -1,
            name: 'xxx.png',
            status: 'done',
            url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
            thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
          }],
          onPreview: (file) => {
            this.setState({
              priviewImage: file.url,
              priviewVisible: true,
            });
          },
      };

    return(
      <div>
         <Row>
           <Col span={5} offset={10} style={{fontSize:20,color:"red"}}>两元商品限购录入</Col>
           <Col span={12} offset={6}>
             <div className="clearfix">
                 <Upload {...props}>
                   <Icon type="plus" />
                   <div className="ant-upload-text">上传照片</div>
                 </Upload>
                 <a href="https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png" target="_blank" className="upload-example">
                   {/*<img alt="example" src="https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png" />
                   <span>示例</span>*/}
                 </a>
                 <Modal visible={this.state.priviewVisible} footer={null} onCancel={this.handleCancel.bind(this)}>
                   <img alt="example" src={this.state.priviewImage} />
                 </Modal>
               </div>
             </Col>
           <Col span={12} offset={6}>
             <div className="example-input">
               产品名称：<Input size="large" placeholder="产品名称" />
               产品现价：<Input size="large" placeholder="产品现价" />
               产品原价：<Input size="large" placeholder="产品原件" />
             </div>
           </Col>
           <Col span={12} offset={10} style={{marginTop:20}}><Button type="primary">提交商品信息</Button></Col>
         </Row>
      </div>

    );
  }
}
