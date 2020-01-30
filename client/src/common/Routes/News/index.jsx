import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'antd';
import Sources from 'modules/News/Sources';

const News = () => {
  return (
    <Row className="centered">
      <Col span={12} offset={6}>
        <h1>News</h1>
        <Sources />
      </Col>
    </Row>
  );
};

const mapStateToProps = state => state.news;

export default connect(mapStateToProps)(News);
