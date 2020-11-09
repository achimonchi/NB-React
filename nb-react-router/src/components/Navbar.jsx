const { Link } = require("react-router-dom");


export default function Navbar(){
    return <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/home/about">About</Link>
      </li>
    </ul>
  }