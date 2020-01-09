import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'antd';
import Sources from '../../../modules/News/Sources';

class News extends PureComponent {
  constructor() {
    super();
    this.state = {
      test: 'test'
    };
  }

  render() {
    return (
      <Row className="centered">
        <Col span={12} offset={6}>
          <h1>News</h1>
          <Sources />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    news: {
      ...state.news,
      articles: state.news.articles,
      headlines: [...state.news.headlines],
      sources: [...state.news.sources]
    }
  };
};

export default connect(mapStateToProps)(News);
