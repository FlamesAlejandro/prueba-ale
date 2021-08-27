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
    
            getDataList( data )
                .then( actividad => {
                    
                    setState({
                        data: actividad,
                        loading: false
                    });
                })
    
        }, [data])
    
        return state; // { data:[], loading: true };

    }
    catch(err){
        throw console.log(err);
    }
    
}
