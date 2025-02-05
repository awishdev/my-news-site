

//create component to render passed in article data


import React from 'react';
import { Link } from'react-router-dom';

function NewsCard({ title, topic, id }) {
    return (
        <Link to={`./article/${id}`} className="card">
            <h2>{title}</h2>
            <p>{topic}</p>
        </Link>
    )
}

export default NewsCard;