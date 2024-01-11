import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {

    static defaultProps = {
        country: 'in',
        category: 'general'
      }

      static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
      }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    } 
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e573c4553e5d49a7995373bd78a03225&pageSize=20`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parse = await data.json();

        this.setState({ articles: parse.articles, totalResults: parse.totalResults, loading: false });
    }

    handlePrevClick = async () => {
        // console.log('previous');
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e573c4553e5d49a7995373bd78a03225&page=${this.state.page - 1}&pageSize=20`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parse = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parse.articles,
            loading: false
        })
    }

    handleNextClick = async () => {
        //console.log('next');
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}in&category=${this.props.category}&apiKey=e573c4553e5d49a7995373bd78a03225&page=${this.state.page + 1}&pageSize=20`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parse = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles: parse.articles,
            loading: false
        })
    }
    render() {
        return (
            <div className=" bg-slate-300 py-4">
                <div className=" py-4">
                    <h2 className="heading text-2xl text-center font-semibold">Top Headlines</h2>
                    <hr className=" w-28 my-1 h-1 mx-auto bg-gray-700 border-0 rounded" />
                </div>
                {this.state.loading && <Spinner />}
                <div className="grid grid-cols-3 place-content-center gap-20">
                    {! this.state.loading && this.state.articles.map((element) => {
                        return (<div key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 90) : ""} imageurl={element.urlToImage} url={element.url} />
                        </div>)
                    })}
                </div>
                <div className="button flex justify-around mt-10">
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" onClick={this.handlePrevClick} disabled={this.state.page <= 1}>&larr; Previous</button>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}
