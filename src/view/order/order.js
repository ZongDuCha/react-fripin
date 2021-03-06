import diqu from './diqu';
import resstr from './getMap';
import React, {Component} from 'react'
import { Picker, List } from 'antd-mobile';
import { createForm } from 'rc-form';

import './order.scss'
import proimg from 'static/img/123123.png'
class Order extends Component{
    deleteImg(){
        alert(`你点击了删除图片`)
    }
    componentDidMount(){
        var local = new resstr();
        local.getLocation(function (res) {
            var q = JSON.stringify(res);
            alert(q);
        });
    }
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div className="order-container">
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
                        <Picker extra="请选择地区"
                                data={diqu}
                                title="请选择地区"
                                {...getFieldProps('district', {
                                    initialValue: ["110000", "110100", "110101"],
                                })}
                                onOk={e => console.log('ok', e)}
                                onDismiss={e => console.log('dismiss', e)}
                                >
                                <List.Item arrow="horizontal"></List.Item>
                        </Picker>
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

var OrderFrom = createForm()(Order)
export default OrderFrom;