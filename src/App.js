import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css';

import { Route} from 'react-router';
import { BrowserRouter } from 'react-router-dom';

// tabbar 指向组件
import Index from './view/index/index'
import List from './view/list/list'
import User from './view/user/user'
import Tabbar from './view/main/tabbar'


class App extends Component {
	render() {
		return (
			<div style={{ height: '100vh' }}>
				<BrowserRouter>
					<div>
						<Route exact path='/' component={Index} />
						<Route path="/list" component={List}/>
						<Route path="/user" component={User}/>
						<Route path="*" component={Tabbar}/>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}
export default App;
