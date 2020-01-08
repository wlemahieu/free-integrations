import React from 'react';
import { each, map } from 'lodash';
import { Timeline } from 'antd';

export const createTimelineData = (inputs, responses) => {
	const timeline = [];
	each(inputs, (value, key) => {
		timeline.unshift(value);
		if (responses[key]) {
			timeline.unshift(responses[key]);
		}
	});
	return timeline;
};

export const createTimelineItems = (inputs, responses) => {
	const timeline = createTimelineData(inputs, responses);
	const timelineEven = timeline.length % 2 === 0;
	return map(timeline, (text, index) => {
		const indexEven = index % 2 === 0;
		const color = (!indexEven && timelineEven) || (indexEven && !timelineEven) ? 'blue' : 'green';
		const key = color === 'blue' ? `me-${index}` : `ai-${index}`;
		return <Timeline.Item color={color} key={key}>{text}</Timeline.Item>;
	});
};
