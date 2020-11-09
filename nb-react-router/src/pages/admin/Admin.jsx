import { Button } from "reactstrap";

export default function Admin(){
    return (
        <>
            <h1>Halaman Admin</h1>
            <Button onClick={()=>{
                localStorage.setItem("login", false);
                window.location.replace('/');
            }}>Logout</Button>
        </>
    )
}