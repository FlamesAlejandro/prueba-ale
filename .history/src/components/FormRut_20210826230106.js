import React from 'react'

export const FormRut = () => {

    
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
        </>
    )
}
