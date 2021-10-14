import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Bloggerz</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color:"white",
                    backgroundColor:"#3722f6e8",
                    borderRadius: '8px'
                }}>Post a BLOG</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;