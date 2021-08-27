import axios from 'axios';
import { useEffect, useState } from 'react'

export const useDataFetch = (rut) => {
    const [actividad, setActividad] = useState([]);

    useEffect(() => {
        
        axios.get(`https://multigarantiassoapapi.azurewebsites.net/api/test/getactivities?rut=${rut}`)
        .then(res => {
            console.log(res);
            setActividad(res.data);
        })
        .catch((err) => {
            console.log(err);
        })

    })
    return actividad;
}