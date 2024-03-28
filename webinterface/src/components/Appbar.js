import React from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Appbar(){

    const user = JSON.parse(localStorage.getItem('user'));

    const auth = useAuth();

    return(
        <nav className="navbar bg-secondary">
            <div className="container-fluid">
                <a className="navbar-brand" style={{color: 'white'}} href="/">Main page</a>
                <ul className="nav justify-content-end">
                    {!user && <a className="nav-link" style={{color: 'white'}} href="/login">Login</a>}
                    {!user && <a className="nav-link" style={{color: 'white'}} href="/registration">Register</a>}
                    {user && <a className="nav-link" style={{color: 'white'}} href="/post">Post</a>}
                    {user && <a className="nav-link" style={{color: 'white'}} href="/profile">Profile</a>}
                    <form onSubmit={() => auth.logout()}>
                        {user && <button className="nav-link" style={{color: 'white'}}>Log out</button>}
                    </form>
                </ul>
            </div>
        </nav>
    );
}