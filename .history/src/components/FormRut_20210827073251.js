import React, { useState } from 'react'
import { useFetchRut } from '../hooks/useFetchRut';
import { useFetchActividad } from '../hooks/useFetchActividad';

export const FormRut = () => {

    const [rut, setRut] = useState('0');
    const [actividad, setActividad] = useState('');
    
    const { data, loading } = useFetchRut( rut );
    
    // const { dataValue, waitingRut } = useFetchActividad( data );    

    // const RutValidar = () => {

    //     const { validarRUT } = require('validar-rut');

    //     if ( validarRUT(rut))
    //     {
    //         console.log('Correcto');
    //         setResultado(true);            
                        
    //     }
    //     else {
    //         console.log('Incorrecto');
    //         setResultado(false);
    //     }

    // }

    const handleInputChange = ( e ) => {        
        setRut( e.target.value );
    }

    const handleCheckChange = ( e ) => {
        setActividad( e.target.value );
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

                <div>
                    {
                        <select value
                        !!data && data.map( check => (
                            <div className="form-check">
                                <input className="form-check-input" key={check.codigo} type="checkbox" value={check.codigo} id={check.codigo} onChange={handleCheckChange} />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    {check.actividad}
                                </label>
                            </div>
                        ))
                    }
                </div>              

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
