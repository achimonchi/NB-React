import LayoutHome from './components/LayoutHome';
import LayoutAdmin from './components/LayoutAdmin';
import { useEffect, useState } from 'react';

function App() {
  const [isLogged, setLogged] = useState(false);

  useEffect(()=>{
    setLogged(checkLoggedIn());
  }, [])

  function checkLoggedIn(){
    const logged = localStorage.getItem("login");
    
    return logged === "true";
  }

  if(isLogged){
    return (
      <div className="App">
        <LayoutAdmin/>
      </div>
    );
  } else {
    return (
      <div className="App">
        <LayoutHome/>      
      </div>
    );
  }
  
}

export default App;
