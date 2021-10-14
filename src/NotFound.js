import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry :(</h2>
            <p>That page can not be found.</p>
            <Link to="/" style={{
                    color:"white",
                    backgroundColor:"#3722f6e8",
                    borderRadius: '8px',                                      
                }}>Click here to return to home page</Link>
        </div>
     );
}
 
export default NotFound;