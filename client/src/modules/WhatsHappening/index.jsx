import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';

class WhatsHappening extends PureComponent {
	render() {
		return (
			<Row className="centered" style={{ paddingTop: '40px' }}>
				<Col span={12} offset={6}>
					<h3>Sources</h3>
				</Col>
			</Row>
		);
	}
}

WhatsHappening.propTypes = {
	type: PropTypes.string
};

WhatsHappening.defaultProps = {
	type: ''
};

export default WhatsHappening;
