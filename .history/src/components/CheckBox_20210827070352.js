import React from 'react'

export const CheckBox = (codigo, actividad) => {
    return (
        <>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value={codigo} id={codigo} onChange={handleCheckChange} />
                <label class="form-check-label" for="flexCheckDefault">
                    {actividad}
                </label>
            </div>
        </>
    )
}
