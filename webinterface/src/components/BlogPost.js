import React from "react";
import { useNavigate } from "react-router-dom";

export default function BlogPost(){
    const[text, setText] = React.useState('');
    const user = JSON.parse(localStorage.getItem('user'));

    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {text, user};
        fetch("http://localhost:8080/blog/saveBlog", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("New blog has been saved.");
            navigate('/');
        });

    }

    return(
        <div className="form-center">
            <form onSubmit={handleSubmit}>
                <p>Share your thoughts with everyone!</p>
                <textarea value={text} onChange={(e) => setText(e.target.value)} className="form-control"/><br/>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
