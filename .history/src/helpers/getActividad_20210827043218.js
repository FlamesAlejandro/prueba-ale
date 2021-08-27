
export const getActividad = async(rut) => {
    
    if(rut){
        const url = `https://multigarantiassoapapi.azurewebsites.net/api/test/getactivities?rut=${rut}`;
        const resp = await fetch( url,{
            headers: {
                'PruebaTecnica':'PruebaTecnica'
            }
        });
        const { dataList } = await resp.json();

        let revisar = 

        const activity = dataList.map( act => {
            return {
                codigo: act.codigo,
                actividad: act.actividad
            }
        })
        console.log(activity)
        return activity;
    }
    else{

    }
    

}