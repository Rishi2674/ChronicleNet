import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title , description , imageurl,url} = this.props;
        return (
            <div>
                <div className="max-w-sm border bg-slate-600 rounded-lg shadowbg-gray-800 border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src={!imageurl?"https://t3.ftcdn.net/jpg/01/44/86/46/360_F_144864656_yfNDNmeMSaTHIJFLYBq9GtRgjiFeBc10.webp":imageurl} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}...</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}...</p>
                        <a href={url} target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">
                            Read more
                        </a>
                    </div>
                </div>


            </div>
        )
    }
}
