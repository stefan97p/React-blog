import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const{data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');
    
    // const handleDelete = (id) =>{
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);

    // handleDelete={handleDelete}}
    
    
    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isLoading && <div>Loading...</div>}          
            {blogs && <BlogList blogs={blogs} title="All blogs" />}
        </div>
     );
}
 
export default Home;