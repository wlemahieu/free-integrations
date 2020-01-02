import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Col, Input, Row } from 'antd';
const { Search } = Input;

class ChatInput extends PureComponent {
	render() {
		const { disabledSubmit, input } = this.props;
		return (
			<Row className="centered" style={{ paddingTop: '40px' }}>
				<Col span={12} offset={6}>
				<Search
					placeholder="What's on your mind?"
					enterButton
					size="large"
					onChange={e => this.props.updateInput(e.target.value)}
					onSearch={e => this.props.onSearch(input)}
					disabled={disabledSubmit}
					value={input}
				/>
				</Col>
			</Row>
		);
	}
}

ChatInput.propTypes = {
	disabledSubmit: PropTypes.bool,
	input: PropTypes.string,
	onSearch: PropTypes.func
};

ChatInput.defaultProps = {
	disabledSubmit: false,
	input: '',
	onSearch: () => {}
};

export default ChatInput;
