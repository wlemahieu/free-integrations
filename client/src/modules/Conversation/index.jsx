import React, { PureComponent } from 'react';
import { Col, Row, Timeline } from 'antd';
import { map } from 'lodash';

const createTimeline = (inputs, responses) => {
	return map(inputs, (value, key) => {
		return {
			input: value,
			response: responses[key]
		};
	});
};

const createTimelineItems = (conversation) => {
	return map(conversation, (piece, key) => {
		return (
			<div key={key}>
				<Timeline.Item key={`me-${key}`}>{piece.input}</Timeline.Item>
				<Timeline.Item color="green" key={`ai-${key}`}>{piece.response}</Timeline.Item>
			</div>
		);
	});
};

class Conversation extends PureComponent {
	render() {
		const chat = this.props.chat;
		const timeline = createTimeline(chat.inputs, chat.responses);
		return (
			<Row className="centered" style={{ paddingTop: '60px' }}>
				<Col span={12} offset={6}>
					<Timeline mode="alternate">
						{createTimelineItems(timeline)}
					</Timeline>
				</Col>
			</Row>
		);
	}
}

export default Conversation;
