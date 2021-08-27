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
                <br />
                <div className="container">
                    <div className="row row-cols-12 text-center">
                        <div className="col">
                            <h2>Responsabilidad Civil para Empresas</h2>
                            <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus in dui id elementum. Quisque quis leo id mauris posuere commodo. Curabitur pharetra, diam a maximus imperdiet, dui eros mattis lacus, non convallis justo tellus id enim. Nunc at orci congue, gravida elit ut, elementum orci. Fusce vitae nibh nibh. Nam sit amet porttitor risus, ut molestie justo. Proin vel enim ultrices, laoreet est at, pellentesque odio. Morbi et feugiat dui, ac pretium sem. Nullam fringilla quis lorem nec imperdiet. Cras sed egestas massa. Nunc non justo erat.</p>
                        </div>
                        <div className="col">
                        <h3>Principales Coberturas</h3>
                            <div class="row row-cols-2">
                                <div class="col">Responsabilidad Civil Cruzada</div>
                                <div class="col">Responsabilidad Civil por transporte de personas</div>
                                <div class="col">Responsabilidad Civil Patronal</div>
                                <div class="col">Defensa de </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: "url(/img/3.png)",
                                backgroundRepeat: 'no-repeat',
                                width:'100%',  }}></div>
                    <div className="row row-cols-12 text-center">
                        <div className="col">
                        <h2>Protección Financciera para Empleadores</h2>
                            <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus in dui id elementum. Quisque quis leo id mauris posuere commodo. Curabitur pharetra, diam a maximus imperdiet, dui eros mattis lacus, non convallis justo tellus id enim. Nunc at orci congue, gravida elit ut, elementum orci. Fusce vitae nibh nibh. Nam sit amet porttitor risus, ut molestie justo. Proin vel enim ultrices, laoreet est at, pellentesque odio. Morbi et feugiat dui, ac pretium sem. Nullam fringilla quis lorem nec imperdiet. Cras sed egestas massa. Nunc non justo erat.</p>
                        </div>
                        <div className="col">
                            <h3>Principales Coberturas</h3>
                            <div class="row row-cols-2">
                                <div class="col">Responsabilidad Civil Cruzada</div>
                                <div class="col">Column</div>
                                <div class="col">Column</div>
                                <div class="col">Defensa de </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>    
        </>
    )
}
