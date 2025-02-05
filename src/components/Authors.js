// page to display author bios
import React from 'react';
import { useOutletContext } from'react-router-dom';
import AuthorCard from './AuthorCard.js';

function Authors() {
  // pull authors data from the context
  const myData = useOutletContext();
  const authors = myData.authors;
  //create array of AuthorCard components for each author
  const authorList = authors.map((author) => ( <AuthorCard key={author.id} author={author} /> ));


  return (
    <div>
      <h1>Authors</h1>
      {authorList}
      
    </div>
  );
}

export default Authors;