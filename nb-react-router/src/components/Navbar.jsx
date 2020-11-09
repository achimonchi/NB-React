const { Link } = require("react-router-dom");


export default function Navbar(){
    return <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/home/about">About</Link>
      </li>
      <li>
        <Link to="/home/about/noobee">About NooBee</Link>
      </li>
      <li>
        <Link to="/home/about/me">About Me</Link>
      </li>
      <li>
        <Link to="/home/about/project">About This Project</Link>
      </li>
      <li>
        <Link to="/auth/login">Login</Link>
      </li>
      <li>
        <Link to="/auth/logout">logout</Link>
      </li>
    </ul>
  }