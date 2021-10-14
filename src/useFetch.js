import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setisLoding] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const abortC = new AbortController();
        fetch(url, {signal: abortC.signal})
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
                if(err.name === 'Abort Error'){
                    console.log('fetch aborted');
                } else{
                    setisLoding(false);
                setError(err.message);
                }    
            })

            return () => abortC.abort();
    },[url]);

    return{data, isLoading ,error}
}

export default useFetch;