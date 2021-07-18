import './sass/styles.scss';
import { ApolloClient, NormalizedCacheObject, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache: new InMemoryCache({}),
    uri: 'http://localhost:4000/graphql',
});

function App() {
    return (
        <ApolloProvider client={client}>
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
        </ApolloProvider>
    );
}

export default App;
