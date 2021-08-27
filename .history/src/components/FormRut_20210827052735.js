import React, { useState } from 'react'
import { useFetchRut } from '../hooks/useFetchRut';
import { useFetchActividad } from '../hooks/useFetchActividad';

export const FormRut = () => {

    const [rut, setRut] = useState('0');
    const [actividad, setActividad] = useState('');
    
    const { data, loading } = useFetchRut( rut );
    const { dataValue, waitingRut } = useFetchActividad();      

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
                        dataValue.map( check => (
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="{check.}" onChange={handleCheckChange} />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Default checkbox
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
