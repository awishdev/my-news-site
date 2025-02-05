import App from './App';
import Home from "./components/Home";
import Authors from "./components/Authors";
import Article from "./components/Article";
import NewArticle from "./components/NewArticle";


const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            }, 
            {
                path: '/authors',
                element: <Authors />
            },  
            {
                path: '/article/:id',
                element: <Article />
            },
            {
                path: '/newarticle',
                element: <NewArticle />
            } 
        ]
    }

]

export default routes;