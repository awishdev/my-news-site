import React, { useState, useEffect } from 'react';
import { useOutletContext } from'react-router-dom';

function NewArticle(){
    // state controlled form for new article submission with fields for title, author, content
    const [newTitle, setNewTitle] = useState('');
    const [newAuthor, setNewAuthor] = useState('');
    const [newContent, setNewContent] = useState('');
    const [newTopic, setNewTopic] = useState('');
    const context = useOutletContext();
    const setArticles = context.setArticles;
    const articles = context.articles;

    const handleTopicChange = (e) => {
        setNewTopic(e.target.value);
    }

    const handleTitleChange = (e) => {
        setNewTitle(e.target.value);
    }

    const handleAuthorChange = (e) => {
        setNewAuthor(e.target.value);
    }

    const handleContentChange = (e) => {
        setNewContent(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // submit the new article to the server here
        // post request to server with new article data
        fetch('http://localhost:3001/articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: newTitle,
                author: newAuthor,
                content: newContent,
                topic: newTopic
            })
        })
        .then(response => response.json())
        .then(data => {setArticles([...articles, data])});    
        // clear the form
        setNewTitle('');
        setNewTopic('');
        setNewAuthor('');
        setNewContent('');
    }
    return (
        <form className='new-article' onSubmit={handleSubmit}>
            <label>Title:</label>
            <input type="text" value={newTitle} onChange={handleTitleChange} />
            <label>Topic:</label>
            <input type="text" value={newTopic} onChange={handleTopicChange} />
            <label>Author:</label>
            <input type="text" value={newAuthor} onChange={handleAuthorChange} />
            <label>Content:</label>
            <textarea value={newContent} onChange={handleContentChange} />
            <button type="submit">Submit</button>

        </form>
    )

}

export default NewArticle;