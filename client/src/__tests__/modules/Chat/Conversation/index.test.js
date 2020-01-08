import React from 'react';
import { each, every, isArray, isString } from 'lodash';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Conversation from 'src/modules/Chat/Conversation';
import { createTimelineData, createTimelineItems } from 'src/modules/Chat/Conversation/utils';

const inputs = ['You are very nice', 'I feel good.', 'Hello'];
const responses = ['Why thank you!', 'I am glad you feel good.', 'Hey there, how are you?'];
const timeline = createTimelineData(inputs, responses);

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Conversation inputs={inputs} responses={responses} />);
});

describe('<Conversation />', () => {
  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('renders single row className="centered" gutter=0', () => {
		const Rows = wrapper.find('Row');
		const { className, gutter } = Rows.props();
		expect(Rows).toHaveLength(1);
    expect(className).toEqual('centered');
		expect(gutter).toEqual(0);
  });
  it('renders single column span=12 offset=6', () => {
		const Cols = wrapper.find('Col');
		const { span, offset } = Cols.props();
		expect(Cols).toHaveLength(1);
    expect(span).toEqual(12);
		expect(offset).toEqual(6);
  });
  it('renders single scrollbars', () => {
    expect(wrapper.find('Scrollbars')).toHaveLength(1);
  });
  it('renders single timeline mode="alternate"', () => {
		const Timeline = wrapper.find('Timeline');
		const { mode } = Timeline.props();
		expect(Timeline).toHaveLength(1);
    expect(mode).toEqual('alternate');
  });
  it('renders six alternating color timeline items', () => {
		let priorColor = 'blue';
		const TimelineItems = wrapper.find('TimelineItem');
		TimelineItems.forEach((node, key) => {
			const color = node.props().color;
			expect(color).not.toEqual(priorColor);
			priorColor = color;
		});
		expect(TimelineItems).toHaveLength(6);
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
    const timeline = createTimelineItems(inputs, responses);
    expect(every(timeline, React.isValidElement)).toBe(true);
  });
});
