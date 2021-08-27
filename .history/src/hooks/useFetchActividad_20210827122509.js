import { useEffect, useState } from 'react'
import { getActividad } from '../helpers/getActividad';
import { getDataList } from '../helpers/getDataList';

export const useFetch = ( rut, actividad ) => {

    try{

        const [state, setState] = useState({
            data: [],
            loading: true
        });
    
        useEffect( () => {
    
            getDataList( rut, actividad )
                .then( actividad => {
                    
                    setState({
                        data: {rut, actividad},
                        loading: false
                    });
                })
    
        }, [rut, actividad])
    
        return state; // { data:[], loading: true };

    }
    catch(err){
        throw console.log(err);
    }
    
}
