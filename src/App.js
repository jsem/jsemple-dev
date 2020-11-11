import './sass/styles.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/post/:identifier' render={ props => 
                    <Post identifier={props.match.params.identifier}/>
                } />
                <Route path='/' render={ () => 
                    <Home/>
                } />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
