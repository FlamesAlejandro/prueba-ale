import React, { useEffect, useState } from 'react'

export const useFetch = ( url ) => {

    const [state, setState] = useState({ data: null, success: null, message: null});

    useEffect( () => {

        setState({ data: null, success: true, message: null });
        
        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                setState({
                    success: false,
                    message: null,
                    data
                })
            });

    }, [url]);

    async function postData(url = '', data = {}) {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'PruebaTecnica': 'PruebaTecnica',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  postData('https://example.com/answer', { answer: 42 })
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    });

    return 

}
