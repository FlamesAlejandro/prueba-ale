import React from 'react'
import { FormRut } from './components/FormRut';

export const Main = () => {

    return (
        <>
            <main>
                <div className="container-fluid">
                <section className="py-5 text-center container">
                    <div style={{ backgroundImage: "url(/img/2.png)",
                                backgroundRepeat: 'no-repeat',
                                width:'100%',  }}>
                        <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">Protege tu empresa con seguros 100% online</h1>
                            <p className="lead text-muted">Repo</p>
                            <p>
                            {/* <a href="#" className="btn btn-primary my-2">Main call to action</a>
                            <a href="#" className="btn btn-secondary my-2">Secondary action</a> */}
                            </p>
                        </div>
                        </div>
                        <FormRut />
                    </div>    
                </section>
                </div>
            </main>    
        </>
    )
}
