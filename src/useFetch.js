import { useState, useEffect } from "react";


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setisLoding] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error('Could not find data');
            }
            return res.json();
        })
        .then((data =>{
            setData(data);
            setisLoding(false);
            setError(null);

        }))
            .catch(err =>{
                setisLoding(false);
                setError(err.message);
            })
    },[url]);

    return{data, isLoading ,error}
}

export default useFetch;