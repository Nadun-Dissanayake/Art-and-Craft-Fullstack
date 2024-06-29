import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../userContext";
import { Navigate } from "react-router-dom";


export default function Header(){
  const {setUserInfo, userInfo} = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);
  

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

    function logout(){
      const response = fetch('http://localhost:4000/logout' , {
        credentials: 'include',
        method: 'POST',
      });
      setUserInfo(null);

      if(response.json() == "ok"){
        setRedirect(true);
      }

    }

    if(redirect)
    {
        return <Navigate to = {'/service'}/>
    }

    const username = userInfo?.username;

    return(
        <header>
        <Link to='/' className="logo">Finnier Hub</Link>
        <nav>
          {username && (
            <>
              <Link to="/home">Home</Link>
              <Link to="/service">Services</Link>
              <Link to="/about">About</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
              <Link className="addProduct" to="/create">Add Products</Link>
              <Link onClick={logout}>Logout</Link>
            </>
          )}
          {!username && (
            <>
            <Link to="/home">Home</Link>
            <Link to="/service">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/loggin">Logging</Link>
            <Link to='/register'>Registter</Link>
            </>
          )}
          
        </nav>
      </header>
    )
}
