
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
        const { dataValue } = await resp.json();
        console.log(dataValue);

        if (dataValue==null){
            return;
        }

        const amount = dataValue.map( act => {
            return {
                amount: act.amount
            }
        })
        console.log(amount)
        return amount;    
    
}