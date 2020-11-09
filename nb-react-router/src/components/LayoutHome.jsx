import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';
import Navbar from './Navbar';
import About from '../pages/home/About';
import Home from '../pages/home/Home';
import Login from '../pages/home/Login';

export default function LayoutHome(props){
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/home" exact>
                    <Home/>
                </Route>
                <Route path="/auth/login" exact>
                    <Login handleAuth={props.handleAuth} />
                </Route>
                <Route path="/home/about" exact>
                    <About/>
                </Route>
                <Route path="/home/about/:nama" exact>
                    <About/>
                </Route>
                <Route path="/auth/logout" exact>
                    <Redirect to={{pathname:"/home/about"}}/>
                </Route>
                <Route path="/auth/success" exact>
                    <h1>Login Success</h1>
                </Route>
            </Switch>
        </Router>
    )
}