import { useState, useEffect} from "react";
import { Outlet } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';

function App() {
//state variables to hold website data
  //const [fetchedData, setFetchedData] = useState([]);
  const [articles, setArticles] = useState([]);
  const [authors, setAuthors] = useState([]);

// fetch articles and authors from the server
    useEffect(() =>{
        fetch("http://localhost:3001/articles",{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(r => r.json())
        .then(data => setArticles(data))
        .catch(error => console.error(error));
    }, []);
    useEffect(() =>{
      fetch("http://localhost:3001/authors",{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(r => r.json())
      .then(data => setAuthors(data))
      .catch(error => console.error(error));
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <h1>The News Site</h1>
        <NavBar/>
      </header>
      <Outlet context={{articles, setArticles, authors, setAuthors}}/>
    </div>
  );
}

export default App;
