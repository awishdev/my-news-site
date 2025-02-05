

//list the news article titles that fit the topic filter

import React from 'react';
import NewsCard from './NewsCard';
import { useOutletContext } from 'react-router-dom';


function Home() {

    const myData = useOutletContext();
    const articles = myData.articles;
    //create array of NewsCard components for each article
    const newsCards = articles.map((article) => ( <NewsCard key={article.id} article={article} /> ));

    //render the list of news cards
    return (
        <div>
            {newsCards}
        </div>);
}

export default Home;
