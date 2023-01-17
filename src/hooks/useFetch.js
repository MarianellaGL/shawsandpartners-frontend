import { useState, useEffect } from "react";


const useFetch = (url, initialData) => {
    const [data, setData] = useState(initialData);
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data)
            );
    }, [url]);

    return data;
};
export default useFetch;