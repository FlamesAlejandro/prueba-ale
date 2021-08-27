
export const getAmount = async(rut, actividad) => {
    
    
        const url = `https://multigarantiassoapapi.azurewebsites.net/api/test/getSecurePrime`;

        const formData = new FormData();
        formData.append('rut', rut);
        formData.append('activityCodes', actividad);

        const resp = await fetch( url,{
            method: 'POST',
            body: formData,
            headers: {
                'PruebaTecnica':'PruebaTecnica'
            }
        });
        const { dataList } = await resp.json();
        console.log(dataList);

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