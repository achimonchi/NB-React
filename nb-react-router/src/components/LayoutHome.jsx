import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import Navbar from './Navbar';
import About from '../pages/home/About';
import Home from '../pages/home/Home';



export default function LayoutHome(){
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
                <Route path="/home/about" exact>
                    <About/>
                </Route>
            </Switch>
        </Router>
    )
}