import { Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Series from "./components/Series";
import './App.css';
import MovieDetail from "./components/MovieDetail";

function App(){
    return(
        <div style={{margin: 0}}>
            <div className="navbar">
                <div id="navlogo">
                    <h2>Movie Snob</h2>
                </div>
                <ul className="navlinks">
                    <li className="navitems">
                        <Link className="link" to='/'>Home</Link>
                    </li>
                    <li className="navitems">
                        <Link className="link" to='/movies'>Movies</Link>
                    </li>
                    <li className="navitems">
                        <Link className="link" to='/series'>TV Series</Link>
                    </li>
                </ul>
            </div>
            <Switch>
                <Route path="/" exact component={Home}>
                </Route>
                <Route path="/movies" component={Movies}>
                </Route>
                <Route path="/series" component={Series}>
                </Route>
                <Route path="/details/:id" component={MovieDetail}>
                </Route>
            </Switch>

        </div>
    );
}

export default App