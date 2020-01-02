import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Col, Input, Row } from 'antd';
const { Search } = Input;

class ChatInput extends PureComponent {
	constructor(props) {
		super(props);
		this.state = { input: '' };
	}

	updateInput = input => {
		this.setState({ input });
	};

	render() {
		return (
			<Row className="centered" style={{ paddingTop: '40px' }}>
				<Col span={12} offset={6}>
				<Search
					placeholder="What's on your mind?"
					enterButton
					size="large"
					onChange={e => this.updateInput(e.target.value)}
					onSearch={e => this.props.onSearch(this.state.input)}
				/>
				</Col>
			</Row>
		);
	}
}

ChatInput.propTypes = {
	onSearch: PropTypes.func
};

ChatInput.defaultProps = {
	onSearch: () => {}
};

export default ChatInput;
