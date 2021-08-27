import React, { useState } from 'react'
import { useFetchRut } from '../hooks/useFetchRut';
import { useFetch, useFetchActividad } from '../hooks/useFetchActividad';
import { getAmount } from '../helpers/getAmount';

export const FormRut = () => {

    const [rut, setRut] = useState('');
    const [actividad, setActividad] = useState([]);
    
    const { data, loading } = useFetchRut( rut );

    const handleInputChange = ( e ) => {        
        setRut( e.target.value );
    }

    const handleCheckChange = ( e ) => {
        
        
        if(actividad.includes(e.target.value)){
            let filtro = actividad.filter(a => a.values === e.target.value)
            setActividad(filtro);
        }
        else{
            // setActividad(actividad => [e.target.value, ...actividad]);
            setActividad(e.target.value);
            
        }
    }

    const handleSubmit = (e) =>{

        e.preventDefault();
        getAmount(rut, actividad).then(
            resp => console.log(resp)
        );
        console.log([rut,actividad]);     

    } 

    return (
        <>
            <div class="row align-items-center">

            <form onSubmit={ handleSubmit }>
                <div class="col">                
                
                    <input
                        type="text"
                        name="rut"
                        placeholder="99999999-9"
                        value={rut}
                        onChange={handleInputChange}
                    />
                </div>

                <div class="col">                
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
                </div>              

                <div class="col">                
                </div>
                <button
                    type="submit"
                        className="btn btn-primary mt-1 btn-block"
                    >
                        Agregar
                </button>
            </form>
            </div>
        </>
    )
}
