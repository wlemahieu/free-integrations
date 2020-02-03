import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';

const Voices = props => {
  const { voices } = props;
  return (
    <Row className="centered" style={{ paddingTop: '40px' }}>
      <Col span={12} offset={6}>
        { voices }
      </Col>
    </Row>
  );
};

Voices.propTypes = {
  voices: PropTypes.string
};

Voices.defaultProps = {
  voices: ''
};

export default Voices;
