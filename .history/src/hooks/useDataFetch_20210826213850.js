import axios from 'axios';
import { useEffect, useState } from 'react'

export const useDataFetch = async(rut) => {
    
    const url = `https://multigarantiassoapapi.azurewebsites.net/api/test/getactivities?rut=${ encodeURI( rut ) }`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const activity = data.map( act => {
        return {
            id: act.id,
            title: act.title
        }
    })

    return activity;

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