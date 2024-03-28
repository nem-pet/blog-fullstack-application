import React from "react";
import { useNavigate } from "react-router-dom";

export default function BlogPage(){
    const[blogs, setBlogs] = React.useState([]);

    const user = JSON.parse(localStorage.getItem('user'));

    const navigate = useNavigate();

    React.useEffect(() => {
        fetch("http://localhost:8080/blog/getBlog")
        .then(res=>res.json())
        .then((result) => {
            setBlogs(result);
        });
    }, []);

    const deleteBlog = blog => {
        fetch(`http://localhost:8080/blog/${blog}`, {
            method: "DELETE"
        }).then(() => {
            console.log("Blog has been deleted.");
            navigate('/');
        });
    }

    return(
        <div>
            {blogs.map(blog => (
                <div className="blog-form-center" key={blog.id}>
                    <div className="card">
	                    <div className="card-header">
		                    {blog?.user?.username}
	                    </div>
	                    <div className="card-body">
		                    <p className="card-text">{blog?.text}</p>
                            <form onSubmit={() => deleteBlog(blog.id)}>
                                {blog?.user?.id === user?.id && <button className="btn btn-danger">Delete post</button>}
                            </form>
	                    </div>
</div>
                </div>
            ))}
        </div>
    );
}