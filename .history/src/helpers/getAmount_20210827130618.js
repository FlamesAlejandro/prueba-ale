
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
        const respuesta = await resp.json();
        console.log(respuesta);

        if (respuesta==null){
            return;
        }
        if(!!respuesta){
            const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
        }

        return respuesta;    
    
}