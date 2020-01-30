import React, { useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Col, Input, Row } from 'antd';

const { Search } = Input;

const ChatInput = props => {
  const { disabledSubmit, input, onSearch, updateInput } = props;
  const firstUpdate = useRef(true);
  const roseInput = useRef(null);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    // componentDidUpdate
    roseInput.current.focus();
  });

  return (
    <Row className="centered" style={{ paddingTop: '40px' }}>
      <Col span={12} offset={6}>
        <Search
          autoFocus
          ref={(search) => { roseInput.current = search; }}
          placeholder="Say something to Rose Watson"
          enterButton
          size="large"
          onChange={e => updateInput(e.target.value)}
          onSearch={() => onSearch(input)}
          disabled={disabledSubmit}
          value={input}
        />
      </Col>
    </Row>
  );
};

ChatInput.propTypes = {
  disabledSubmit: PropTypes.bool,
  input: PropTypes.string,
  onSearch: PropTypes.func,
  updateInput: PropTypes.func
};

ChatInput.defaultProps = {
  disabledSubmit: false,
  input: '',
  onSearch: () => {},
  updateInput: () => {}
};

export default ChatInput;
