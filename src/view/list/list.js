import React, {Component} from 'react'
import mapIcon from 'static/img/203-Map.png'
import im from 'static/img/123123.png'
import mapIconc from 'static/img/203-Mapc.png'
import './list.scss'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';
const tabs = [
    { title: '距离最近' },
    { title: '附近店铺' },
];

function endText(){
    return (
        <div className='collect-end'>
            <div className='span'></div>
            <div className='end-text'>已经到底了.</div>
            <div className='span'></div>
        </div>
    )
}
class List extends Component{
    render() {
        return (
            <div>
                <div className='collect-header'>
                    <div className='col-map'>
                        <img src={mapIcon} />
                        获取中
                    </div>
                    <input placeholder='搜索关键词' className="phcolor"></input>
                    <div className='col-ss'>搜 索</div>
                </div>
                {/* tab切换 */}
                <WhiteSpace />
                    <Tabs tabs={tabs} initialPage={0} animated={true} useOnPan={false}>
                        {/* 最近 */}
                        <div className="listWrap">
                            <div className="list-content">
                                <Link className="tagli" to="/list/listInfo">
                                    <div className="list-title">title</div>
                                    <div className="list-img">
                                        <img src={im} alt=""/>
                                        <img src={im} alt=""/>
                                        <img src={im} alt=""/>
                                    </div>
                                    <div className="list-map">
                                        <img src={mapIconc} />
                                        地址
                                    </div>
                                </Link>
                            </div>
                            {endText()}
                        </div>
                        {/* 附近 */}
                        <div className="listWrap">
                            <div className='shop-item'>
                                <img src={im} mode="aspectFit"/>

                                <div className='shopInfo'>
                                    <div className='shopTx'>title</div>
                                    <div className='shopName'>联系人：123</div>
                                    <div className='shopMap'>123123123</div>
                                </div>
                            </div>
                            {endText()}
                        </div>
                    </Tabs>
                <WhiteSpace />
        </div>
        )
    }
}

export default List;