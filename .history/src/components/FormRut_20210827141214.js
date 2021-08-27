import React, { useState } from 'react'
import { useFetchRut } from '../hooks/useFetchRut';
// import { useFetch, useFetchActividad } from '../hooks/useFetchActividad';
import { getAmount } from '../helpers/getAmount';

export const FormRut = () => {

    const [rut, setRut] = useState('');
    const [actividad, setActividad] = useState([]);
    // const { amount } = useFetchActividad( rut, actividad );
    const [monto, setMonto] = useState('');
    
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
            setActividad(actividad => [...actividad, e.target.value]);
            // setActividad(e.target.value);
            
        }
    }

    const handleSubmit = (e) =>{

        e.preventDefault();
        
        if( !!rut && !!actividad )
        getAmount(rut, actividad).then(
            resp => setMonto(resp.amount)
            
        );
        console.log();     

    } 

    return (
        <>
            <div className="container">
            <div className="row align-items-center">

            <form onSubmit={ handleSubmit }>
                <div className="col">                
                
                    <input
                        type="text"
                        name="rut"
                        placeholder="99999999-9"
                        value={rut}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="col">                
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

                <div className="col">
                    <button
                        type="submit"
                            className="btn btn-primary mt-1 btn-block"
                        >
                            Agregar
                    </button>
                </div>
            </form>
            </div>
            <div className="card">
                <div className="card-body">
                 <div>{monto}</div>
                </div>
            </div>
            </div>
        </>
    )
}
