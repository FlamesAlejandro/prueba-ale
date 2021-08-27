import React, { useEffect, useState } from 'react'

export const useFetch = ( url ) => {

    const [data, setData] = useState(null);
    const [loading, setLoading]

    useEffect( () => {

        setState({ data: [], success: true, message: null });
        
        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                setState({
                    success: true,
                    message: "Rut Correcto",
                    data
                })
            });

    }, [url]);

    return state;

}
