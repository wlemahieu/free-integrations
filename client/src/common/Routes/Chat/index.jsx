import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import ChatInput from '../../../modules/Chat/Input';
import Conversation from '../../../modules/Chat/Conversation';

class Chat extends PureComponent {
	constructor() {
		super();
		this.state = {
			name: uuid(),
			audioPlayed: false
		}
	};

	onSearch = input => {
		if (input) {
			const name = this.state.name;
			const payload = {
				input,
				name
			};
			this.setState({ audioPlayed: false })
			this.props.dispatch({ type: 'SAVE_USER_INPUT', payload });
		}
	};

	updateInput = input => {
		if (input) {
			this.props.dispatch({ type: 'USER_KEY_PRESS', payload: input });
		}
	};

	render() {
		const inputs = this.props.inputs.length;
		const disabledSubmit = this.props.inputs.length !== this.props.responses.length;
		const input = this.props.input;
		const chatInputProps = {
			disabledSubmit,
			input,
			onSearch: this.onSearch,
			updateInput: this.updateInput
		};
		if (inputs && !disabledSubmit && !this.state.audioPlayed) {
			const audio = new Audio(`http://localhost:3000/${this.state.name}-audio.wav?decache=${Math.random()}`);
			audio.play();
			this.setState({ audioPlayed: true })
		}
		return (
			<div>
				<ChatInput {...chatInputProps} />
				<Conversation chat={this.props} />
			</div>
		);
	}
}

const mapStateToProps = state => state.chat;

export default connect(mapStateToProps)(Chat);
