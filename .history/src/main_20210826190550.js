import React, { useEffect, useState } from 'react'
import { useDataFetch } from './hooks/useDataFetch';
import { useFetch } from './hooks/useFetch';

// import topImg from './assets/images/2_banner-test.png';

export const Main = () => {

    const [rut, setRut] = useState('');
    const [actividad, setActividad] = useState('');
    const [resultado, setResultado] = useState(true);
    

    // useEffect(() => {
    //     const {data, success, message} = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
    // }, [input])

    // const {data, success, message} = useFetch( `https://multigarantiassoapapi.azurewebsites.net/api/test/getactivities?${ rut }` );

    

    const RutValidar = () => {

        const { validarRUT } = require('validar-rut');

        if ( validarRUT(rut))
        {
            console.log('Correcto');
            setResultado(true);
            useDataFetch(rut).then(
                resp => console.log(resp)
            )
                        
        }
        else {
            console.log('Incorrecto');
            setResultado(false);
        }

    }

    const handleInputChange = ( e ) => {
        setRut( e.target.value );
        if(rut.length > 2){
            RutValidar();
        }
        if(rut.length <= 0){
            console.log('Insertar rut');
        }
        
    }

    const handleSubmit = (e) =>{

        e.preventDefault();

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
