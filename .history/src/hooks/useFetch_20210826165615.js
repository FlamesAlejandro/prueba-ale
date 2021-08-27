import React, { useEffect, useState } from 'react'

export const useFetch = ( url ) => {

    const [state, setState] = useState({ data: null, success: null, message: null});

    useEffect( () => {

        setState({ data: null, success: true, message: null });
        
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

    return 

}
