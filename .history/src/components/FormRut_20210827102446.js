import React, { useState } from 'react'
import { useFetchRut } from '../hooks/useFetchRut';
import { useFetchActividad } from '../hooks/useFetchActividad';

export const FormRut = () => {

    const [rut, setRut] = useState('');
    const [actividad, setActividad] = useState([]);
    
    const { data, loading } = useFetchRut( rut );

    const handleInputChange = ( e ) => {        
        setRut( e.target.value );
    }

    const handleCheckChange = ( e ) => {
        
        if(actividad.includes(e.target.value)){
            console.log("si hay")
            let filtro = actividad.filter(a => a.values === e.target.value)
            setActividad(filtro);
        }
        else{
            setActividad(actividad => [e.target.value, ...actividad]);
        }
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
                    {
                        
                        !!data && data.map( check => (
                            <div className="form-check" key={check.codigo}>
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
