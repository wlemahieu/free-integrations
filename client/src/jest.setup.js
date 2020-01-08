import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

console.log('ENZYME REACT ADAPTER');

configure({ adapter: new Adapter() });
