import React, {Component} from 'react'
import { TabBar } from 'antd-mobile';

// tabbar的图片加载
import tab1 from 'static/img/tarbar-1.png';
import tab1c from 'static/img/tarbar-1c.png';
import tab2 from 'static/img/tarbar-2.png';
import tab2c from 'static/img/tarbar-2c.png';
import 'static/sass/main.css';

class Tabbar extends Component{
    constructor(props){
		super(props)
		// 对直接访问网址处理
		this.tabRouter = props.location.pathname 
			? props.location.pathname.split('/')[1] 
			: '' ;
		if(this.tabRouter != 'list' && this.tabRouter != 'user'){
			this.tabRouter = 'index'
		}
        this.state = {
			selectedTab: this.tabRouter,
		};
    }
    
    // 跳转路由
    renderRouter(p, showId){
		this.props.history.push(p)
		this.setState({
			selectedTab: showId
		})
	}

    render() {
        return (
            <TabBar
					unselectedTintColor="#949494"
					tintColor="#33A3F4"
					barTintColor="#F8F8F8">
					{/* 第二=一个导航按钮 */}
					<TabBar.Item
						title="主 页"
						key="主页"
						icon=
						{
							<div><img src={tab1} alt="" style={{width: '22px',height: '22px',}} /></div>
						}
						selectedIcon={
							<div><img src={tab1c} alt="" style={{width: '22px',height: '22px',}} /></div>
						}
						
						selected={this.state.selectedTab === 'index'}
						onPress={() => {
                            this.renderRouter('/', 'index')
						}}
						data-seed="logId"
					>
					</TabBar.Item>
					
					{/* 第二个导航按钮 */}
					<TabBar.Item
						icon={
							<div><img src={tab2} alt="" style={{width: '22px',height: '22px',}} /></div>
						}
						selectedIcon={
							<div><img src={tab2c} alt="" style={{width: '22px',height: '22px',}} /></div>
						}
						title="列表"
						key="列表"
						selected={this.state.selectedTab === 'list'}
						onPress={() => {
                            this.renderRouter('/list', 'list')
						}}
						data-seed="logId1"
					>
					</TabBar.Item>
					
					{/* 第二个导航按钮 */}
					<TabBar.Item
						icon={
							<div style={{
								width: '22px',
								height: '22px',
								background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
							}}
							/>
						}
						selectedIcon={
							<div style={{
								width: '22px',
								height: '22px',
								background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
							}}
							/>
						}
						title="个人"
						key="Friend"
						selected={this.state.selectedTab === 'user'}
						onPress={() => {
							this.renderRouter('/user', 'user')
						}}
					>
					</TabBar.Item>
				</TabBar>
        )
    }
}

export default Tabbar;