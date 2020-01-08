import React from 'react';
import { every, isArray, isString } from 'lodash';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import { Scrollbars } from 'react-custom-scrollbars';
import { Col, Row, Timeline } from 'antd';
import Conversation from 'src/modules/Chat/Conversation';
import { createTimelineData, createTimelineItems } from 'src/modules/Chat/Conversation/utils.js';

const props = {
	inputs: ['I feel good.', 'Hello'],
	responses: ['I am glad you feel good.', 'Hey there, how are you?']
};
const timeline = createTimelineData(props.inputs, props.responses);

let wrapper;
beforeEach(() => {
	wrapper = shallow(<Conversation {...props} />);
});

describe('<Conversation />', () => {
	it('matches snapshot', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
	it('renders 1 <Row> component', () => {
		expect(wrapper.find('Row')).toHaveLength(1);
	});
	it('renders 1 <Col> component', () => {
		expect(wrapper.find('Col')).toHaveLength(1);
	});
	it('renders 1 <Scrollbars> component', () => {
		expect(wrapper.find('Scrollbars')).toHaveLength(1);
	});
	it('renders 1 <Timeline> component', () => {
		expect(wrapper.find('Timeline')).toHaveLength(1);
	});
	it(`renders 4 <TimelineItem> components`, () => {
		expect(wrapper.find('TimelineItem')).toHaveLength(4);
	});
	it('renders <Row> className = \'centered\'', () => {
		expect(wrapper.find('Row').props().className).toEqual('centered');
	});
	it('renders <Timeline> mode = \'alternate\'', () => {
		expect(wrapper.find('Timeline').props().mode).toEqual('alternate');
	});
});

describe('createTimelineData()', () => {
	it('returns an array', () => {
		expect(isArray(timeline)).toBe(true);
	});
	it('renders an array of strings', () => {
		expect(every(timeline, isString)).toBe(true);
	});
});

describe('createTimelineItems()', () => {
	it('renders an array of components', () => {
		const timeline = createTimelineData(props.inputs, props.responses);
		expect(isArray(timeline)).toBe(true);
	});
});
