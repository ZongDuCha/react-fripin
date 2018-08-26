import React, {Component} from 'react'
import { district } from 'antd-mobile-demo-data';
import { Picker, List } from 'antd-mobile';

import './order.scss'
import proimg from 'static/img/123123.png'
class Order extends Component{
    constructor(props){
        super(props)
        console.log(district)
    }
    deleteImg(){
        alert(`你点击了删除图片`)
    }
    render() {
        return (
            <div className="order-container">
                <Picker extra="请选择(可选)"
                        data={district}
                        title="Areas"
                        onOk={e => console.log('ok', e)}
                        onDismiss={e => console.log('dismiss', e)}
                        >
                        <List.Item arrow="horizontal">Multiple & cascader</List.Item>
                </Picker>

                <div className="pro-img">
                    <li><img src={proimg} alt=""/> <span onClick={this.deleteImg}>X</span></li>
                    <li><img src={proimg} alt=""/> <span>X</span></li>
                    <li><img src={proimg} alt=""/> <span>X</span></li>
                    <li><img src={proimg} alt=""/> <span>X</span></li>
                    <li><img src={proimg} alt=""/> <span>X</span></li>
                    <li><img src={proimg} alt=""/> <span>X</span></li>
                </div>

                <div className="setMap">
                    <textarea name="" id="" cols="30" rows="10" placeholder='请输入当前详细地址'></textarea>
                    <div className="getMap">获取地址</div>
                </div>

                <div className="list-input">
                    <li>
                        <span>联系电话：</span>
                        <input type="text" placeholder='请输入联系电话'/>
                    </li>

                    <li>
                        <span>姓　　名：</span>
                        <input type="text" placeholder='请输入姓名'/>
                    </li>

                    <li>
                        <span>回收地区：</span>
                        <input type="text" placeholder='请输入回收地区'/>
                    </li>

                    <li>
                        <textarea name="" id="" cols="30" placeholder='描述废品情况，让回收者更方便了解' rows="10"></textarea>
                    </li>
                </div>

                <div className="okButton">确认发布</div>
                
            </div>
        )
    }
}

export default Order;