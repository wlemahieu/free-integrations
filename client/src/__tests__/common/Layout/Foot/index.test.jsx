import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, getAllByText, getAllByTitle } from '@testing-library/react';
import Foot from 'common/Layout/Foot';

let wrapper;
beforeEach(() => {
  wrapper = render(
    <Router>
      <Foot location={{}} />;
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
  it('should render "Free Integrations" text', async () => {
    const { container } = wrapper;
    const node = await getAllByText(container, 'Free Integrations');
    expect(node.length).toEqual(1);
  });
  it('should render "License" title', async () => {
    const { container } = wrapper;
    const node = await getAllByTitle(container, 'License');
    expect(node.length).toEqual(1);
  });
  it('should render "(MIT License)" text', async () => {
    const { container } = wrapper;
    const node = await getAllByText(container, '(MIT License)');
    expect(node.length).toEqual(1);
  });
  it('should render "Created by Wesley LeMahieu" text', async () => {
    const { container } = wrapper;
    const node = await getAllByText(container, 'Created by Wesley LeMahieu');
    expect(node.length).toEqual(1);
  });
});
