
import { useEffect, useState } from "react";
import LayoutHome from "./components/LayoutHome";
import Admin from "./pages/admin/Admin";

function App() {
  const [isAuth, setAuth] = useState(localStorage.getItem("login"));

  if(isAuth == "true" )
     return <Admin />
  else 
    return <LayoutHome/>;
}





export default App;
