import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Body from 'common/Layout/Body';

const props = { location: {} };

let wrapper;
beforeEach(() => {
  wrapper = mount(
    <Router>
      <Body location={props.location} />
    </Router>
  );
});

describe('<Body />', () => {
  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
