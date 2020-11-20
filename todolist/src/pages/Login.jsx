import { useState } from "react";
import {connect} from 'react-redux';

const Login = (props) =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        const user = {
            username:username,
            password:password
        };
        props.handleLogin(user);
    }
    return(
        <form style={{marginTop:"30px"}} onSubmit={handleSubmit}>
            <label htmlFor="">Username</label>
            &nbsp;
            &nbsp;
            <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text"/>
            <br/>
            <label htmlFor="">Password</label>
            &nbsp;
            &nbsp;
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password"/>
            <br/>
            <button type="submit">Login</button>
        </form>
    )
}

function dispatchToProps(dispatch){
    return{
        handleLogin : (user) => dispatch({type:"LOGIN", data:user})
    }
}

export default connect(null, dispatchToProps)(Login);