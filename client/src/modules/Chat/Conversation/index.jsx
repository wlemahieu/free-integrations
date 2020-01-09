import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import { Col, Row, Timeline } from 'antd';
import { createTimelineItems } from './utils.js';

class Conversation extends PureComponent {
  render() {
    const { inputs, responses } = this.props;
    const timeline = createTimelineItems(inputs, responses);
    return (
      <Row className="centered" style={{ paddingTop: '60px' }}>
        <Col span={12} offset={6}>
          <Scrollbars style={{ height: 600 }}>
            <Timeline mode="alternate" style={{ paddingRight: '20px' }}>
              {timeline}
            </Timeline>
          </Scrollbars>
        </Col>
      </Row>
    );
  }
}

Conversation.propTypes = {
  inputs: PropTypes.array,
  responses: PropTypes.array
};

Conversation.defaultProps = {
  inputs: [],
  responses: []
};

export default Conversation;
