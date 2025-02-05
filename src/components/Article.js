//component to render full article page
import React from 'react';
import { useParams, useOutletContext } from'react-router-dom';


function Article() {
    const { id } = useParams();
    const myData = useOutletContext();
    const articles = myData.articles;
    const article = articles.find((article) => article.id === parseInt(id));
   // console.log(article);
    //render article content here

    return (
        <div>
            <h1>{article.title}</h1>
            <h2>Author: {article.author}</h2>
            <h3>Topic: {article.topic}</h3>
            <p>{article.content}</p>
        </div>
    )
}
export default Article;