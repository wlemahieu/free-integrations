import React from 'react';
import ChatInput from 'modules/Chat/Input';
import { render } from '@testing-library/react';

const props = {
  disabledSubmit: false,
  input: ''
};

let wrapper;
beforeEach(() => {
  wrapper = render(
    <ChatInput
      disabledSubmit={props.disabledSubmit}
      input={props.input}
    />
  );
});
afterEach(() => {
  wrapper = undefined;
});

describe('<ChatInput />', () => {
  it('should match snapshot', () => {
    const { container } = wrapper;
    expect(container).toMatchSnapshot();
  });
  /*
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
    const { disabled, placeholder } = search.props();
    expect(search).toHaveLength(1);
    expect(placeholder).toBe('Say something to Rose Watson');
    expect(disabled).toEqual(false);
  });
  */
});
