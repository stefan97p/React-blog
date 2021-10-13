import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setisLoding] = useState(true);
    const [error, setError] = useState(null);

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);

    }
    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
        .then(res => {
            if(!res.ok){
                throw Error('Could not find data');
            }
            return res.json();
        })
        .then((data =>{
            setBlogs(data);
            setisLoding(false);
            setError(null);

        }))
            .catch(err =>{
                setisLoding(false);
                setError(err.message);
            })
    },[]);
    
    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isLoading && <div>Loading...</div>}          
            {blogs && <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>}
        </div>
     );
}
 
export default Home;