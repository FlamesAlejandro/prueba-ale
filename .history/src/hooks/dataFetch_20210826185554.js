import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const dataFetch = (rut) => {
    const [actividad, setActividad] = useState([]);

    useEffect(() => {
        
        axios.get('https://multigarantiassoapapi.azurewebsites.net/api/test/getactivities?rut=${rut}`)

    }, [input])
}