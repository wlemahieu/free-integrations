import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Head from 'common/Layout/Head';

let wrapper;
beforeEach(() => {
  wrapper = render(
    <Router>
      <Head location={{}} />;
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
