import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { isObject } from 'lodash';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Body from 'common/Layout/Body';

const props = { location: {} };

let wrapper;
beforeEach(() => {
  wrapper = mount(
    <Router initialEntries={[ { pathname: '/', key: 'testKey' } ]}>
      <Body location={props.location} />
    </Router>
  );
});

describe('<Body />', () => {
  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('wraps body in withRouter()', () => {
    const withRouter = wrapper.find('withRouter(Body)');
    const { location } = withRouter.props();
    expect(withRouter).toHaveLength(1);
    expect(isObject(location)).toEqual(true);
  });
  it('renders single Adapter className="content"', () => {
    const adapter = wrapper.find('Adapter');
    const { className } = adapter.props();
    expect(adapter).toHaveLength(1);
    expect(className).toBe('content');
  });
  it('renders breadcrumb trail', () => {
    const breadcrumb = wrapper.find('Breadcrumb');
    const breadcrumbItems = wrapper.find('BreadcrumbItem');
    expect(breadcrumb).toHaveLength(1);
    expect(breadcrumbItems.length).toBeGreaterThanOrEqual(1);
  });
  it('renders switch routes with default path /', () => {
    const switchStatement = wrapper.find('Switch');
    const route = wrapper.find('Route');
    const { path } = route.props();
    expect(switchStatement).toHaveLength(1);
    expect(route).toHaveLength(1);
    expect(path).toBe('/');
  });
});
