import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ChatInput from '../../../modules/ChatInput';
import Conversation from '../../../modules/Conversation';

class Chat extends PureComponent {
	onSearch = input => {
		if (input) {
			this.props.dispatch({ type: 'SAVE_USER_INPUT', payload: input });
		}
	};

	updateInput = input => {
		if (input) {
			this.props.dispatch({ type: 'USER_KEY_PRESS', payload: input });
		}
	};

	render() {
		const disabledSubmit = this.props.chat.inputs.length !== this.props.chat.responses.length;
		const input = this.props.chat.input;
		const chatInputProps = {
			disabledSubmit,
			input,
			onSearch: this.onSearch,
			updateInput: this.updateInput
		};
		return (
			<div>
				<ChatInput {...chatInputProps} />
				<Conversation chat={this.props.chat} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		chat: {
			...state.chat,
			input: state.chat.input,
			inputs: [...state.chat.inputs],
			responses: [...state.chat.responses]
		}
	};
};

export default connect(mapStateToProps)(Chat);
