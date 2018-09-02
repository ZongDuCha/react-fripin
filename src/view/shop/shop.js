import diqu from '../order/diqu';
import React,{Component} from 'react'
import fm from 'static/img/fengmian.png'
import dp from 'static/img/123123.png'
import './shop.scss'
import { createForm } from 'rc-form';
import { Picker, List } from 'antd-mobile';


class Shop extends Component{
    delImg(){
        alert('点击了删除')
    }
    render(){
        const { getFieldProps } = this.props.form;
        return (
            <div className="shop-container">
                <div className="shop-wrap">
                    {/* 封面 */}
                    <div className="shop-fm">
                        <img src={fm} alt=""/>
                    </div>

                    {/* input */}
                    <div className="shop-list">
                        <li>
                            <input placeholder="请输入店铺名字" type="text"/>
                            <span>：店铺名字</span>
                        </li>
                        <li>
                            <span>联系人：</span>
                            <input placeholder="请输入联系人" type="text"/>
                        </li>
                        <li>
                            <input placeholder="请输入联系电话" type="text"/>
                            <span>：联系电话</span>
                        </li>
                        <li>
                            <Picker extra="请选择地区"
                                    data={diqu}
                                    title="请选择地区"
                                    {...getFieldProps('district', {
                                        initialValue: ["110000", "110100", "110101"],
                                    })}
                                    onOk={e => console.log('ok', e)}
                                    onDismiss={e => console.log('dismiss', e)}
                                    style={{width:'20px'}}>
                                    <List.Item arrow="horizontal">回收地区：</List.Item>
                            </Picker>
                        </li>
                        <li>
                            <textarea name="" placeholder="请输入详细地址(可忽略)" id="" cols="30" rows="10"></textarea>
                        </li>
                        <li>
                            <textarea name="" placeholder="请输入店铺描述" id="" cols="30" rows="10"></textarea>
                        </li>
                    </div>

                    {/* 店铺照片 */}
                    <div className="shop-imgList">
                    {(
                        [1,2,3,4,5,6].map( (v, i) => {
                            return <li key={i}>
                                <img  src={dp} alt=""/>
                                <span onClick={this.delImg}>X</span>
                            </li>
                        })
                    )}
                    </div>

                    <div className="push">
                        <button>确认</button>
                    </div>
                </div>
            </div>
        )
    }
}
var ShopFrom = createForm()(Shop)
export default ShopFrom;