import React, { useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Col, Input, Select, Row } from 'antd';

const { Search } = Input;

const ChatInput = props => {
  const { disabledSubmit, input, onSearch, onVoiceChange, updateInput, voice, voices } = props;
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

  const setSearchRef = search => {
    roseInput.current = search;
  };

  return (
    <Row className="centered" style={{ paddingTop: '40px' }}>
      <Col span={12} offset={6}>
        <Input.Group>
          <Select
            size="large"
            defaultValue={voice}
            style={{ width: '30%', marginRight: '4px' }}
            onChange={onVoiceChange}
          >
            {voices.map((obj, key) => (<Select.Option key={key} value={key}>{obj.name}</Select.Option>))}
          </Select>
          <Search
            autoFocus
            ref={setSearchRef}
            placeholder="Say something to Rose Watson"
            enterButton
            size="large"
            onChange={e => updateInput(e.target.value)}
            onSearch={onSearch(input)}
            style={{ width: '69%' }}
            disabled={disabledSubmit}
            value={input}
          />
        </Input.Group>
      </Col>
    </Row>
  );
};

ChatInput.propTypes = {
  disabledSubmit: PropTypes.bool,
  input: PropTypes.string,
  onSearch: PropTypes.func,
  onVoiceChange: PropTypes.func,
  updateInput: PropTypes.func,
  voice: PropTypes.string,
  voices: PropTypes.array
};

ChatInput.defaultProps = {
  disabledSubmit: false,
  input: '',
  onSearch: () => {},
  onVoiceChange: () => {},
  updateInput: () => {},
  voice: '',
  voices: []
};

export default ChatInput;
