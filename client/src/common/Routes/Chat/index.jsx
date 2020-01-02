import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ChatInput from '../../../modules/ChatInput';
import Conversation from '../../../modules/Conversation';

class Chat extends PureComponent {
	onSearch = input => {
		if (input) {
			const { dispatch } = this.props;
			console.log('onSearch dispatch USER_INPUT');
			console.log(input);
			dispatch({ type: 'USER_INPUT', payload: { input } });
		}
	};

	render() {
		console.log('render props ', this.props);
		return (
			<div>
				<ChatInput onSearch={this.onSearch}/>
				<Conversation responses={this.props.responses}/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		inputs: state.inputs,
		responses: state.responses
	}
};

export default connect(mapStateToProps)(Chat);
