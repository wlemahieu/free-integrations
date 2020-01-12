import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ChatInput from 'modules/Chat/Input';

const props = {
  disabledSubmit: false,
  input: ''
};

let wrapper;
beforeEach(() => {
  wrapper = shallow(
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
  it('renders single large non-disabled search input with specific placeholder verbiage', () => {
    const search = wrapper.find('Search');
    const { disabled, placeholder, size } = search.props();
    expect(search).toHaveLength(1);
    expect(placeholder).toBe('Say something to Rose Watson');
    expect(disabled).toEqual(false);
  });
});
