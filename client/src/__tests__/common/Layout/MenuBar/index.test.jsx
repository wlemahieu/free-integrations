import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import MenuBar from 'common/Layout/Foot';

let wrapper;
beforeEach(() => {
  wrapper = render(
    <Router>
      <MenuBar location={{}} />;
    </Router>
  );
});
afterEach(() => {
  wrapper = undefined;
});

describe('Layout Foot', () => {
  it('should match snapshot', () => {
    const { container } = wrapper;
    expect(container).toMatchSnapshot();
  });
});
