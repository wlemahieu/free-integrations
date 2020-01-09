import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';

class Sources extends PureComponent {
  componentDidUpdate() {
    this.roseInput.focus();
  }

  render() {
    return (
      <Row className="centered" style={{ paddingTop: '40px' }}>
        <Col span={12} offset={6}>
          <h3>Sources</h3>
        </Col>
      </Row>
    );
  }
}

Sources.propTypes = {
  sources: PropTypes.array
};

Sources.defaultProps = {
  sources: []
};

export default Sources;
