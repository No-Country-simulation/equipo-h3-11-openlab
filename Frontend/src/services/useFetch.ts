import { useState, useEffect } from "react";

export function useFetch(url:string) {
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then((response) => response.json)
        .then((data) => setData(data))
        .finally(() => setLoading(false));
    }, [])
    
    return { data, loading }
}