import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import { Col, Row, Timeline } from 'antd';
import { createTimelineItems } from './utils.js';

class Conversation extends PureComponent {
	render() {
		const chat = this.props.chat;
		return (
			<Row className="centered" style={{ paddingTop: '60px' }}>
				<Col span={12} offset={6}>
					<Scrollbars style={{ height: 600 }}>
						<Timeline mode="alternate" style={{ paddingRight: '20px' }}>
							{createTimelineItems(chat.inputs, chat.responses)}
						</Timeline>
					</Scrollbars>
				</Col>
			</Row>
		);
	}
}

Conversation.propTypes = {
	input: PropTypes.string,
	inputs: PropTypes.array,
	responses: PropTypes.array
};

Conversation.defaultProps = {
	input: '',
	inputs: [],
	responses: []
};

export default Conversation;
