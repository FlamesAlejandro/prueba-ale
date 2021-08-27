
export const getDataList = async(rut, activityCodes) => {
    
    
        const url = `https://multigarantiassoapapi.azurewebsites.net/api/test/getSecurePrime`;
        const resp = await fetch( url,{
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
                codigo: act.codigo
            }
        })
        console.log(activity)
        return activity;    
    
}