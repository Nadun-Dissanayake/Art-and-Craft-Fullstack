import l from '../pictures/l.png';


import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../userContext";

export default function LogginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setUserInfo} = useContext(UserContext);

    async function login(ev) {
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers:{'Content-Type' : 'application/json'},
            credentials: 'include',
        });
        
        
        if(response.ok){
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                setRedirect(true);
            });
        } else{
            alert('wrong Password or username');
        }
    }

    if(redirect){
        return <Navigate to={'/home'} />
    }

    return(
        <form className="logging" onSubmit={login}>
            <div className="login-picture">
                <img src={l}/>
            </div>
            <div className="details">
                <h1>Sign In</h1>
                <text>Username</text>
                <input type="text" value={username} onChange={ev => setUsername(ev.target.value)}/>
                <text>password</text>
                <input type="password"  value={password} onChange={ev => setPassword(ev.target.value)}/>
                <button>Sign In</button>
            </div>
            
        </form>
    );
}