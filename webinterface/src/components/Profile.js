import React from "react";

export default function Profile(){

    const user = JSON.parse(localStorage.getItem('user'));
    const [password, setPassword] = React.useState(user.password);
    const [email, setEmail] = React.useState(user.email);
    const [phonenumber, setPhonenumber] = React.useState(user.phonenumber);
    const [updatedStatus, setUpdatedStatus] = React.useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedUser = {password, email, phonenumber};
        user.password = password;
        user.email = email;
        user.phonenumber = phonenumber;
        fetch(`http://localhost:8080/user/${user.id}`, {
            method: "PUT",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(updatedUser)
        }).then(() => {
            localStorage.setItem('user', JSON.stringify(user));
            setUpdatedStatus('Your profile has been updated.');
            console.log("User has been updated.");
        });
    }

    console.log(user);

    return(
        <div className="form-center">
            <form onSubmit={handleSubmit}>
                <p>Update your account information!</p>
                <label htmlFor="password">Set new password:</label><br/>
                <input id="password" className="form-control" type="password" value={password} onChange={e => setPassword(e.target.value)} required/><br/>
                <label htmlFor="email">Set new email:</label><br/>
                <input id="email" className="form-control" type="email" value={email} onChange={e => setEmail(e.target.value)} required/><br/>
                <label htmlFor="phonenumber">Set new phonenumber</label><br/>
                <input id="phonenumber" className="form-control" type="text" value={phonenumber} onChange={e => setPhonenumber(e.target.value)} required/><br/>
                <div style={{color: 'blue'}}>{updatedStatus}</div><br/>
                <button className="btn btn-primary">Update</button>
            </form>
        </div>
    );

}