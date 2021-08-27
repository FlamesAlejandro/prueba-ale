import React, { useEffect, useState } from 'react'
import { useFetch } from './hooks/useFetch';

// import topImg from './assets/images/2_banner-test.png';

export const Main = () => {

    const [rut, setRut] = useState('');
    const [actividad, setActividad] = useState('');
    const [resultado, setResultado] = useState(true);
    

    // useEffect(() => {
    //     const {data, success, message} = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
    // }, [input])

    // const RutValidar = (rut) => {

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
        RutValidar(rut);
    }

    // useEffect((rut) => {
        
    //     // resultado ? console.log('correcto') : console.log('error')
    //     RutValidar(rut);

    // }, [rut])


    const handleSubmit = (e) =>{

        e.preventDefault();
        // RutValidar(rut);
        // const { validarRUT } = require('validar-rut');

        // if ( validarRUT(rut))
        // {
        //     console.log('Correcto');
            
        // }
        // else {
        //     console.log('Incorrecto');
        // }


    } 

    return (
        <>
            <main>
                <section className="py-5 text-center container">
                    <div style={{ backgroundImage: "url(/img/2.png)",
                                backgroundRepeat: 'no-repeat',
                                width:'100%',  }}>
                        <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">Album example</h1>
                            <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                            <p>
                            {/* <a href="#" className="btn btn-primary my-2">Main call to action</a>
                            <a href="#" className="btn btn-secondary my-2">Secondary action</a> */}
                            </p>
                        </div>
                        </div>
                    </div>    
                </section>
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
                <p>{resultado}</p>
            </main>    
        </>
    )
}
