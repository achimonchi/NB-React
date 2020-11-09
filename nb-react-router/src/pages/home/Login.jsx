import { Redirect } from "react-router";
import { Button } from "reactstrap";

export default function Login(props){
    const handleRedirect = () =>{
        localStorage.setItem("login", true);
        window.location.replace('/');
    }
    return(
        <Button onClick={handleRedirect}>
            Login
        </Button>
    )
}