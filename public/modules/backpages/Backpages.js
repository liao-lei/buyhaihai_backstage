import React from "react";
import ReactDOM from "react-dom";
import Backheader from "Backheader";
import Backleft from "Backleft";
import Backright from "Backright";
import { Row, Col } from 'antd';

export default class Backpages extends React.Component{
  render(){
    return (
      <div>
        <Backheader />
        <Row style={{height:600}}>
          <Col span={5} offset={1} >
            <Backleft/>
          </Col>
          <Col span={17}>
            {this.props.children}
            {/*<Backright />         */}
          </Col>
        </Row>
      </div>
    );
  }
}
