import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageurl, newsUrl, author, date } = props;
    return (
        <div>
            <div className="container">
                <div className="card" >
                    <img src={imageurl} className="card-img-top" alt="error" />
                    <div className="card-body" style={{ marginBottom: '-20px' }} >
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author} on {date}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark position-relative start-50 translate-middle" style={{}}>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
