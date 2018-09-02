import React, {Component} from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import { Link } from 'react-router-dom'

import './index.scss';
import recy from 'static/img/raw_1527689726.png'
import order from 'static/img/raw_1527689776.png'
import shop from 'static/img/rarw_123wdeq.png'

class Index extends Component{
    constructor(props){
        super(props)
        this.state = ({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            imgHeight: 176,
            title: ['内容一', '内容二', '内容三'],
            titleIndex: 0
        })
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }

    // banner 轮播滑动
    sildeTitle(n){
        this.setState({
            titleIndex: n
        })
    }

    render() {
        let _this = this.state;
        return (
            <div>
                <WingBlank>
                    <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={ (from, to) => this.sildeTitle(to) }
                    afterChange={index => console.log(index)}
                    >
                    {_this.data.map(val => (
                        <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: _this.imgHeight }}
                        >
                        <img
                            src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                    </Carousel>
                    <div> {_this.title[_this.titleIndex]} </div>
                </WingBlank>

                <div className="container">
                    <Link className="wrap" to="/list">
                        <img src={recy} alt="我是回收者"/>
                        <p>我是回收者</p>
                    </Link>
                    <Link className="wrap" to="/order">
                        <img src={order} alt="我是回收者"/>
                        <p>我要下单</p>
                    </Link>
                    <Link className="wrap" to="/shop">
                        <img src={shop} alt="我的店铺"/>
                        <p>我的店铺</p>
                    </Link>
                </div>

            </div>
        )
    }
}

export default Index;