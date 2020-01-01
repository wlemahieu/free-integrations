import React, { PureComponent } from 'react';
import { Col, Input, Row } from 'antd';
const { Search } = Input;

class ChatInput extends PureComponent {
	render() {
		return (
			<Row className="centered" style={{ paddingTop: '40px' }}>
				<Col span={12} offset={6}>
				<Search
					placeholder="What's on your mind?"
					enterButton
					size="large"
					onSearch={value => console.log(value)}
				/>
				</Col>
			</Row>
		);
	}
}

export default ChatInput;
