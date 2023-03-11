import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [article, setArticle] = useState([]);
    const [totalResult, setTotalResult] = useState(0)
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    // document.title = "NewsaApp - " + capitalizeFirstLetter(props.category);

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(50);
        let parsedata = await data.json();
        props.setProgress(70);
        setArticle(parsedata.articles)
        setTotalResult(parsedata.TotalResults)
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews()
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pagesize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedata = await data.json();
        setArticle(article.concat(parsedata.articles));
        setTotalResult(parsedata.totalResults)
        setLoading(false);
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <div>
            <>
                <h2 className="text-center" style={{"marginTop":"60px"}}>Top Headlines - GetNews Stay Updated</h2>
                <h2 className="text-center">{capitalizeFirstLetter(props.category)}</h2>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={article.length}
                    next={fetchMoreData}
                    hasMore={article.length !== totalResult}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row my-3">
                            {article.map((element) => {
                                return <div className="col-md-4 my-2" key={element.url}>
                                    <NewsItem title={element.title} description={element.description == null ? "" : element.description.slice(0, 100) + ".."} date={element.publishedAt} author={element.author == null ? "Unkownn" : element.author} imageurl={element.urlToImage == null ? "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" : element.urlToImage} newsUrl={element.url} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        </div>
    )
}
News.defaultProps = {
    country: 'in',
    pagesize: 15,
    category: 'sports'
}
News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
}

export default News
