
export const getActividad = async(rut) => {
    
    const url = `https://multigarantiassoapapi.azurewebsites.net/api/test/getactivities?rut=99999999-9`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const activity = data.map( act => {
        return {
            codigo: act.codigo,
            actividad: act.actividad
        }
    })

    return activity;

    // useEffect(() => {
        
    //     axios.get(`https://multigarantiassoapapi.azurewebsites.net/api/test/getactivities?rut=${encodeURI(rut)}`)
    //     .then(res => {
    //         console.log(res);
    //         setActividad(res.data);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })

    // })
    // return actividad;
}