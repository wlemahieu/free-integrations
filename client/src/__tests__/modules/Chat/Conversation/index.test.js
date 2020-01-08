import React from 'react';
import { shallow } from 'enzyme';
import Conversation from '../../../../modules/Chat/Conversation';

function mock() {
	const props = {
		input: '',
		inputs: [],
		responses: []
	};
  return <Conversation chat={props} />;
}

describe('<Conversation />', () => {
  it('shallow renders correctly', () => {
    const wrapper = shallow(mock());
    expect(wrapper).toMatchSnapshot();
  });
});
