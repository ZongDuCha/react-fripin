import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import './listInfo.scss'
import mapIconc from 'static/img/203-Mapc.png'
import start from 'static/img/star.png'
import startActive from 'static/img/star-c.png'

import mr from 'static/img/raw_1527779736.png'
import infoimg from 'static/img/123123.png'

class ListInfo extends Component{
    constructor(props){
        super(props)
        this.state = {
            startState: true
        }
        this.antiStart = this.antiStart.bind(this)
    }
    antiStart(){
        this.setState({
            startState: !this.state.startState
        })
    }
    render(){
        let _this = this.state;
        return (
            <div className="ListInfo">
                <div className='pro-header'>
                    <div className='pro-title'>
                        docText
                    </div>

                    <div className='pro-item'>
                        <div className='pro-time'>dff ( creatTime )</div>
                        <div className='pro-phone'>phone</div>
                    </div>
                </div>

                <div className='pro-oper'>
                    <Link className='pro-back' to="/list">返回</Link>

                    <div  className='pro-star' onClick={this.antiStart}>
                        <img src={ _this.startState ? start : startActive}></img> 收藏
                    </div>

                    <a className='pro-contact' href="tel:13168934172">联系电话</a>
                </div>

                <div className='pro-user'>
                    <div className='user-img'>
                        <img src={mr}/>
                        userName
                    </div>

                    <div className='pro-map'>
                    <img src={mapIconc}></img>
                    map
                    </div>
                </div>

                <div className='pro-img' catchtap='slide'>
                    <div className='pro-img-list' >
                        <img src={infoimg} mode="aspectFit"></img>
                    </div>
                    <div className='pro-img-list' >
                        <img src={infoimg} mode="aspectFit"></img>
                    </div>
                    <div className='pro-img-list' >
                        <img src={infoimg} mode="aspectFit"></img>
                    </div>
                    <div className='pro-img-list' >
                        <img src={infoimg} mode="aspectFit"></img>
                    </div>
                </div>
                <div className='pro-bt'>— 已经到底了 —</div>
            </div>
        )
    }
}

export default ListInfo;