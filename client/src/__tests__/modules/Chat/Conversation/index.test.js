import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import Conversation from 'src/modules/Chat/Conversation';
const props = {
	inputs: ['I feel good.', 'Hello'],
	responses: ['I am glad you feel good.', 'Hey there, how are you?']
};

let wrapper;
beforeEach(() => {
	wrapper = shallow(<Conversation {...props} />);
});

describe('<Conversation />', () => {
	it('renders properly', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
