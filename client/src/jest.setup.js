// Great information on differences between various Enzyme render methods
// https://gist.github.com/fokusferit/e4558d384e4e9cab95d04e5f35d4f913
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
