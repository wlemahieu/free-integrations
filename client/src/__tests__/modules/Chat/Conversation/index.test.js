import React from 'react';
import every from 'lodash/every';
import isArray from 'lodash/isArray';
import isString from 'lodash/isString';
import { render } from '@testing-library/react';
import Conversation from 'modules/Chat/Conversation';
import { createTimelineData, createTimelineItems } from 'modules/Chat/Conversation/helper';

const inputs = ['You are very nice', 'I feel good.', 'Hello'];
const responses = ['Why thank you!', 'I am glad you feel good.', 'Hey there, how are you?'];
const timeline = createTimelineData(inputs, responses);

let wrapper;
beforeEach(() => {
  wrapper = render(
    <Conversation inputs={inputs} responses={responses} />
  );
});
afterEach(() => {
  wrapper = undefined;
});

describe('<Conversation />', () => {
  it('should match snapshot', () => {
    const { container } = wrapper;
    expect(container).toMatchSnapshot();
  });
  /*
  it('should render "Home" crumb', async () => {
    const { container } = wrapper;
    const crumb = await getAllByTitle(container, 'Home');
    expect(crumb.length).toEqual(1);
  });
  */
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
