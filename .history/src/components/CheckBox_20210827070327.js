import React from 'react'

export const CheckBox = () => {
    return (
        <>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value={check.codigo} id={check.codigo} onChange={handleCheckChange} />
            <label class="form-check-label" for="flexCheckDefault">
                {check.actividad}
            </label>
        </div>
        </>
    )
}
