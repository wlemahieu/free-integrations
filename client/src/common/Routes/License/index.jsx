import React from 'react';
import { useHistory } from "react-router-dom";
import { Button, Col, Modal, Row } from 'antd';

const License = () => {
	let history = useHistory();
	const footer = <Button key="back" onClick={() => history.goBack()}>Ok</Button>;
	return (
		<div>
			<Row className="centered">
				<Col span={12} offset={6}>
					<h1>License Agreement</h1>
				</Col>
			</Row>
			<Modal
				closable={false}
				footer={[footer]}
				style={{ marginTop: 40 }}
				title="MIT License"
				visible={true}
			>
				<p>Copyright 2020 Wesley LeMahieu</p>
				<p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
				<p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
				<p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
	    </Modal>
		</div>
	);
};

export default License;
