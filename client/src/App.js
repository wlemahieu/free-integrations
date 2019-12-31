import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button, Layout } from 'antd';
const { Header, Content } = Layout;

export default function App() {
  return (
		<Router>
			<Layout>
			  <Header>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/chat">Chat</Link>
							</li>
						</ul>
					</nav>
				</Header>
			  <Content>
					<Switch>
						<Route path="/chat">
							<Chat />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</Content>
			</Layout>
		</Router>
	);
}

const Home = () => {
  return (
		<div>
			<h2>Home</h2>
			<Button>Click Me</Button>
		</div>
	);
}

function Chat() {
  return <h2>Chat</h2>;
}
