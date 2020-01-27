import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, getAllByTitle } from '@testing-library/react';
import BreadcrumbTrail from 'common/Layout/BreadcrumbTrail';

let wrapper;
beforeEach(() => {
  wrapper = render(
    <Router>
      <BreadcrumbTrail location={{ pathname: '/chat' }} />;
    </Router>
  );
});
afterEach(() => {
  wrapper = undefined;
});

describe('Layout Body', () => {
  it('should match snapshot', () => {
    const { container } = wrapper;
    expect(container).toMatchSnapshot();
  });
  it('should render "Home" crumb', async () => {
    const { container } = wrapper;
    const crumb = await getAllByTitle(container, 'Home');
    expect(crumb.length).toEqual(1);
  });
  it('should render "Chat" crumb', async () => {
    const { container } = wrapper;
    const crumb = await getAllByTitle(container, 'Chat');
    expect(crumb.length).toEqual(1);
  });
});
