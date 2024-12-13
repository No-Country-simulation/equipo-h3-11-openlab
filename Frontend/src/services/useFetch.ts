import { useState, useEffect } from "react";
import axios from "axios";

export function useFetch(config:any) {
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setLoading(true)
        axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            setData(response.data)
          })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => setLoading(false));
    }, [])
    
    return { data, loading }
}




