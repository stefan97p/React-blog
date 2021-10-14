import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {
    
    const [title,  setTitle] = useState('');
    const [body,  setBody] = useState('');
    const [author,  setAuthor] = useState('');
    const [gender,  setGender] = useState('Male');
    const [isPending,  setIsPending] = useState(false);
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added');
            setIsPending(false);
            history.push('/');
        })       
    }

    return (
        <div className = "create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                type = "text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}                             
                />
                <label>Blog away:</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}  
                />
                <label>Author:</label>
                <input 
                type = "text"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}                             
                />
                <label>Gender</label>
                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                {!isPending && <button>Post</button>}
                {isPending && <button>Adding post...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
                <p>{gender}</p>
            </form>
        </div>
      );
}
 
export default Create;
<div className = "create">

</div>