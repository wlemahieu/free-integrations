import React, { PureComponent } from 'react';
import { Col, Row, Timeline } from 'antd';
import { each, map } from 'lodash';

const createTimeline = (inputs, responses) => {
	const timeline = [];
	each(inputs, (value, key) => {
		timeline.unshift(value);
		if (responses[key]) {
			timeline.unshift(responses[key]);
		}
	});
	return timeline;
};

const createTimelineItems = (timeline) => {
	const timelineEven = timeline.length % 2 === 0;
	return map(timeline, (text, index) => {
		const indexEven = index % 2 === 0;
		const color = (!indexEven && timelineEven) || (indexEven && !timelineEven) ? 'blue' : 'green';
		const key = color === 'blue' ? `me-${index}` : `ai-${index}`;
		return <Timeline.Item color={color} key={key}>{text}</Timeline.Item>;
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
