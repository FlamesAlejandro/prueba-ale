import React from 'react'
import { FormRut } from './components/FormRut';

export const Main = () => {

    return (
        <>
            <main>
                <div className="container-fluid">
                <section className="py-2 text-center container">
                    <div style={{ backgroundImage: "url(/img/2.png)",
                                backgroundRepeat: 'no-repeat',
                                width:'100%',  }}>
                        <div className="row py-lg-5">
                            <div className="col-lg-6 col-md-8 mx-auto">
                                <h1 className="fw-light">Protege tu empresa con seguros 100% online</h1>
                                <p className="lead">Responsabilidad Civil General para Empresas</p>
                                <p className="lead">Protección Financiera para Empleadores</p>
                                <p className="formColor">
                                   
                                </p>
                            </div>
                        </div>
                        
                    </div>    
                </section>
                <FormRut /> 
                
                </div>
                <div className="container">
                    <div className="row row-cols-6">
                        <div className="col">
                            <h2>sahdaso</h2>
                            <p></p>
                        </div>
                        <div className="col">
                            
                        </div>
                    </div>
                    <div style={{ backgroundImage: "url(/img/3.png)",
                                backgroundRepeat: 'no-repeat',
                                width:'100%',  }}></div>
                    <div className="row row-cols-6">
                        <div className="col">

                        </div>
                        <div className="col">
                            
                        </div>
                    </div>
                </div>
            </main>    
        </>
    )
}
