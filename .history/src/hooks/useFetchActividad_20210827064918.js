import { useEffect, useState } from 'react'
import { getActividad } from '../helpers/getActividad';
import { getDataList } from '../helpers/getDataList';

export const useFetch = ( data ) => {

    try{

        const [state, setState] = useState({
            data: [],
            loading: true
        });
    
        useEffect( () => {
    
            getDataList( data )
                .then( actividad => {
                    
                    setState({
                        data: actividad,
                        loading: false
                    });
                })
    
        }, [rut, activityCodes])
    
        return state; // { data:[], loading: true };

    }
    catch(err){
        throw console.log(err);
    }
    
}
