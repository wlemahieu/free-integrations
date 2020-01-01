import React, { PureComponent } from 'react';
import { Col, Row, Timeline } from 'antd';

class Conversation extends PureComponent {
	render() {
		return (
			<Row className="centered" style={{ paddingTop: '60px' }}>
				<Col span={12} offset={6}>
					<Timeline mode="alternate">
						<Timeline.Item>My name is Wesley. How old are you CleverWatson?</Timeline.Item>
						<Timeline.Item color="green">I'm doing fine, thank you. What's your name?</Timeline.Item>
						<Timeline.Item>Hello there. How are you?</Timeline.Item>
					</Timeline>
				</Col>
			</Row>
		);
	}
}

export default Conversation;
