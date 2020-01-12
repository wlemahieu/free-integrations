import React from 'react';
import { every, isArray, isString } from 'lodash';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Conversation from 'modules/Chat/Conversation';
import { createTimelineData, createTimelineItems } from 'modules/Chat/Conversation/helper';

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
    const rows = wrapper.find('Row');
    const { className, gutter } = rows.props();
    expect(rows).toHaveLength(1);
    expect(className).toBe('centered');
    expect(gutter).toEqual(0);
  });
  it('renders single column span=12 offset=6', () => {
    const cols = wrapper.find('Col');
    const { span, offset } = cols.props();
    expect(cols).toHaveLength(1);
    expect(span).toEqual(12);
    expect(offset).toEqual(6);
  });
  it('renders single scrollbars', () => {
    expect(wrapper.find('Scrollbars')).toHaveLength(1);
  });
  it('renders single timeline mode="alternate"', () => {
    const timeline = wrapper.find('Timeline');
    const { mode } = timeline.props();
    expect(timeline).toHaveLength(1);
    expect(mode).toBe('alternate');
  });
  it('renders six alternating color timeline items', () => {
    let priorColor = 'blue';
    const timelineItems = wrapper.find('TimelineItem');
    timelineItems.forEach((node) => {
      const color = node.props().color;
      expect(color).not.toEqual(priorColor);
      priorColor = color;
    });
    expect(timelineItems).toHaveLength(6);
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
