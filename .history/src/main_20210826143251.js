import React from 'react'
// import topImg from './assets/images/2_banner-test.png';

export const Main = () => {

    const handleSubmit  (e) 

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
                        onChange={ handleRutChange }
                    />

                    <input
                        type="text"
                        name="actividad"
                        placeholder="99999999-9"
                        value={actividad}
                        onChange={ handleactividadChange }
                    />
                </form>
            </main>    
        </>
    )
}
