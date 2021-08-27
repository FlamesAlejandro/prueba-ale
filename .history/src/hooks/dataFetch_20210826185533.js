import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const dataFetch = () => {
    const [actividad, setActividad] = useState([]);

    useEffect(() => {
        
        axios.get('https://multigarantiassoapapi.azurewebsites.net/api/test/getactivities?rut=99999999-9')

    }, [input])
}