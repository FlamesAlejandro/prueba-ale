import React, { useEffect, useState } from 'react'

export const useFetch = ( url ) => {

    const [state, setState] = useState({ success: null, message: true, dataList: null, dataValue: null});

    useEffect( () => {

        setState({ success: null, message: true, dataList: null, dataValue: null });
        
        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                setState({
                    success: true,
                    error: null,
                    data
                })
            });

    }, [url]);

    return 

}
