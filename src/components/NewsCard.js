

//create component to render passed in article data


import React from 'react';

function NewsCard({ title, topic }) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{topic}</p>
        </div>
    )
}

export default NewsCard;