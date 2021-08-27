
export const getAmount = async(rut, actividad) => {
    
        console.log(rut, actividad);
        const url = `https://multigarantiassoapapi.azurewebsites.net/api/test/getSecurePrime`;

        const resp = await fetch( url,{
            method: 'POST',
            body: JSON.stringify({
                rut: rut,
                activityCodes: actividad
              }),
            headers: {
                'PruebaTecnica':'PruebaTecnica',
                'Content-Type':'application/json'
            }, 
            
        });
        const {respuesta} = await resp.json();
        console.log(respuesta);

        const gifs = respuesta.map( img => {
            return {
                monto: img.dataValue.amount
            }
        })

        return respuesta;    
    
}