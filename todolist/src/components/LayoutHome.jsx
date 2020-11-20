import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';

const LayoutHome = () =>{
    return(
        <Router>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/login">Login</Link>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/login" exact>
                    <Login/>
                </Route>
            </Switch>
        </Router>
    )
}

export default LayoutHome;