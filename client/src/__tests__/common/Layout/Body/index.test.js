import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Body from 'common/Layout/Body';

describe('Layout Body', () => {
  it('should render', () => {
    const { container } = render(
      <Router>
        <Body location={{}} />;
      </Router>
    );
    expect(container).toMatchSnapshot();
  });
});
