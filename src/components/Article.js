//component to render full article page
import React from 'react';
import { useParams, useOutletContext } from'react-router-dom';


function Article() {
    const { id } = useParams();
    const myData = useOutletContext();
    const articles = myData.articles;
    const article = articles.find((article) => article.id === parseInt(id));
    console.log(article);
    return (<></>)
}
export default Article;