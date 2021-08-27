import React, { useState } from 'react'
import { useFetchRut } from '../hooks/useFetchRut';
import { useFetchActividad } from '../hooks/useFetchActividad';

export const FormRut = () => {

    const [rut, setRut] = useState('0');
    const [actividad, setActividad] = useState([]);
    
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
        
        if(actividad === e.target.value){
            setActividad('e.target.value');
        }
        setActividad(e.target.value);
        console.log(actividad);
    }

    const handleSubmit = (e) =>{

        e.preventDefault();
        console.log(actividad);        

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
                    {/* <select className="form-check" multiple={true} value={[]} onChange={handleCheckChange}> */}
                    {
                        
                        !!data && data.map( check => (
                            // <option className="form-check-input" key={check.codigo} value={check.codigo}> {check.actividad} </option>
                            <div className="form-check">
                                <input className="form-check-input" key={check.codigo} type="checkbox" value={check.codigo} id={check.codigo} onChange={handleCheckChange} />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    {check.actividad}
                                </label>
                            </div>
                        ))
                        
                    }
                    {/* </select> */}
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
