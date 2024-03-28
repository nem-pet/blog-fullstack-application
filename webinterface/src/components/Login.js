import React from "react";
import { useAuth, AuthContext } from "../contexts/AuthContext";

export default function Login(){

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { invalidCredentials} = React.useContext(AuthContext);

    const input = {username, password};

    const auth = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.login(input);
    }


    return(
        <div className="form-center">
            <form onSubmit={handleSubmit}>
                <p>Enter your account credentials!</p>
                <input id="username" className="form-control" value={input.username} placeholder="Username" type="text" onChange={(e) => setUsername(e.target.value)} required/><br/>
                <input id="password" className="form-control" value={input.password} placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} required/><br/>
                <div style={{color: 'red'}}>{invalidCredentials}</div><br/>
                <button className="btn btn-primary">Submit</button><br/><br/>
                <a href="/registration">You don't have an account?</a>
            </form>
        </div>
    );
}