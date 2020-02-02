import React, { useContext, useEffect, useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import Context from 'common/Routes/Chat/context';

const Voices = props => {
  const { voices } = props;
  const firstUpdate = useRef(true);
  const { rispatch } = useContext(Context);

  useEffect(() => {
    // mount
    rispatch({ type: 'GET_VOICES' });
    // unmount
    return () => {};
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    // componentDidUpdate
    console.log('VOICES componentDidUpdate');
    console.log(voices);
  });

  return (
    <Row className="centered" style={{ paddingTop: '40px' }}>
      <Col span={12} offset={6}>
        { voices }
      </Col>
    </Row>
  );
};

Voices.propTypes = {
  voices: PropTypes.array
};

Voices.defaultProps = {
  voices: []
};

export default Voices;
