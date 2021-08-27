import React, { useEffect, useState } from 'react'

export const useFetch = ( url ) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {

        const response = await fetch(url);
        const data = await response.json();
        const [item] = data.result;
        setData(item);
        setLoading(false);
    }, []);

    return { data, loading };


}
