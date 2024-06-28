import l from '../pictures/l.png';
import { useState } from "react";


export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [comformpassword, setComformpassword] = useState('')
    async  function register(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({username,password,comformpassword}), 
            headers:{'Content-Type' : 'application/json'},
        }) 
        if(response.status === 200){
            alert('Registration successful');
        } else if(password != comformpassword){
            alert('passwords are not matching');
        } 
        else{
            alert('Your username should be unquie');
        }
        
    }
    return(
        <form className="logging" onSubmit={register}>
            <div className="login-picture">
                <img src={l}/>
            </div>
            <div className="details">
                <h1>Create a new account</h1>
                <text>Username</text>
                <input type="text" value={username} onChange={ev => setUsername(ev.target.value)}/>
                <text>Password</text>
                <input type="password" value={password} onChange={ev => setPassword(ev.target.value)}/>
                <text>Comform Password</text>
                <input type="password" value={comformpassword} onChange={ev => setComformpassword(ev.target.value)}/>
                <button>Create Account</button>
            </div>
        </form>
    );
}