import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css';

import { Route} from 'react-router';
import { BrowserRouter } from 'react-router-dom';

// tabbar 指向组件
import Index from './view/index/index'
import Order from './view/order/order'

import List from './view/list/list'
import User from './view/user/user'
import Tabbar from './view/main/tabbar'


class App extends Component {
	render() {
		return (
			<div style={{ height: '100vh' }}>
				<BrowserRouter>
					<div style={{height: '100%'}}>
						<Route exact path='/' component={Index} />
						<Route exact path='/order' component={Order} />

						<Route path="/list" component={List}/>
						<Route path="/user" component={User}/>

						<Route exact path='/' component={Tabbar}/>
						<Route exact path='/:name' component={Tabbar}/>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}
export default App;
