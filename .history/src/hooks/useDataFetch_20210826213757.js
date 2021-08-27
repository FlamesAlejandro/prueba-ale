import axios from 'axios';
import { useEffect, useState } from 'react'

export const useDataFetch = async(rut) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=A8xMXqzieIHmtO3BjGLAtf1daSSDAv8K`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;


    // useEffect(() => {
        
    //     axios.get(`https://multigarantiassoapapi.azurewebsites.net/api/test/getactivities?rut=${encodeURI(rut)}`)
    //     .then(res => {
    //         console.log(res);
    //         setActividad(res.data);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })

    // })
    // return actividad;
}