
export const getActividad = async(rut) => {
    
    
        const url = `https://multigarantiassoapapi.azurewebsites.net/api/test/getactivities?rut=${rut}`;
        const resp = await fetch( url,{
            headers: {
                'PruebaTecnica':'PruebaTecnica'
            }
        });
        const { dataList } = await resp.json();

        if (dataList==null){
            return;
        }

        const { codigo, actividad } = dataList.map( act => {
            return {
                codigo: act.codigo,
                actividad: act.actividad
            }
        })
        console.log(activity)
        return activity;    
    
}