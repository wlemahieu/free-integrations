import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import ChatInput from 'modules/Chat/Input';

const props = {
  disabledSubmit: false,
  input: ''
};

let wrapper;
beforeEach(() => {
  wrapper = mount(
    <ChatInput
      disabledSubmit={props.disabledSubmit}
      input={props.input}
    />
  );
});

describe('<ChatInput />', () => {
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
  it('renders single large search input with specific placeholder verbiage', () => {
    const Search = wrapper.find('Search');
    const { placeholder, size } = Search.props();
    expect(Search).toHaveLength(1);
    expect(placeholder).toBe('Say something to Rose Watson');
    expect(size).toBe('large');
  });
});
