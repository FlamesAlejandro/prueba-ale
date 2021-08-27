import React, { useEffect, useState } from 'react'

export const useFetch = ( url ) => {

    const [state, setState] = useState({ success: null, message: true, error: null});

    useEffect( () => {

        setState({ data: null, loading: true, error: null });
        
        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                setState({
                    loading: false,
                    error: null,
                    data
                })
            });

    }, [url]);

    return 

}
