import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch';

export const FormRut = () => {

    const [rut, setRut] = useState('0');
    const [actividad, setActividad] = useState('');
    const [resultado, setResultado] = useState(true);
    
    const { data, loading } = useFetch( rut );      

    const RutValidar = () => {

        const { validarRUT } = require('validar-rut');

        if ( validarRUT(rut))
        {
                                       
        }
        else {
            
        }

    }

    const handleInputChange = ( e ) => {

        setRut( e.target.value );        
        
    }

    const handleSubmit = (e) =>{

        e.preventDefault();        

    } 

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <input
                    type="text"
                    name="rut"
                    placeholder="99999999-9"
                    value={rut}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    name="actividad"
                    placeholder="99999999-9"
                    value={actividad}
                    onChange={ (e) => setActividad(e.target.value) }
                />
                <button
                    type="submit"
                        className="btn btn-primary mt-1 btn-block"
                    >
                        Agregar
                </button>
            </form>
        </>
    )
}
