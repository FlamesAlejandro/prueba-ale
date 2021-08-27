
export const getAmount = async(rut, activityCodes) => {
    
    
        const url = `https://multigarantiassoapapi.azurewebsites.net/api/test/getSecurePrime`;
        const resp = await fetch( url,{
            method: 'POST', // or 'PUT'
            body: JSON.stringify({
                rut:rut,
                activityCodes:activityCodes
            }),
            headers: {
                'PruebaTecnica':'PruebaTecnica'
            }
        });
        const { dataList } = await resp.json();

        if (dataList==null){
            return;
        }

        const activity = dataList.map( act => {
            return {
                amount: act.amount
            }
        })
        console.log(activity)
        return activity;    
    
}