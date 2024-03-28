import React from "react";
import { useNavigate } from "react-router-dom";

export default function Registration(){
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phonenumber, setPhonenumber] = React.useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {username, password, email, phonenumber};
        fetch("http://localhost:8080/user/register", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(user)
        }).then(() => {
            console.log("New user has been saved.");
            navigate('/login');
        });
    }

    return(
        <div className="form-center">
            <form onSubmit={handleSubmit}>
                <p>Enter new account information!</p>
                <input id="username" className="form-control" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required></input><br/>
                <input id="password" className="form-control" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required></input><br/>
                <input id="email" className="form-control" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required></input><br/>
                <input id="phonenumber" className="form-control" type="text" placeholder="Phonenumber" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} required></input><br/>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}