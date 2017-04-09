import React from "react";
import ReactDOM from "react-dom";
import Showsusers from "Showsusers"
import { Row, Col } from 'antd';


export default class Backright extends React.Component{
  constructor(props){
    super(props);
    this.state={
    };
  }
  render(){
    return (
      <div>
          <Row>
            <Col span={24} style={{borderLeft:"1px solid #A6A6A6",background:"#BCD2EE",height:500}}>
                <Row style={{height:50}}></Row>
              {/*<Showsusers />*/}
            </Col>
          </Row>
      </div>
    );
  }
}
