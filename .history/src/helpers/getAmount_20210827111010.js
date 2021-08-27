
export const getAmount = async(rut, actividad) => {
    
    
        const url = `https://multigarantiassoapapi.azurewebsites.net/api/test/getSecurePrime`;

        const formData = new FormData();
        formData.append('rut', CloudPreset);
        formData.append('file', archivoSubir);

        const resp = await fetch( url,{
            method: 'POST', // or 'PUT'
            body: JSON.stringify({
                "rut":rut,
                "activityCodes":actividad,
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