import { useEffect, useState } from 'react'
import { getActividad } from '../helpers/getActividad';

export const useFetch = ( rut ) => {

    try{

        const [state, setState] = useState({
            data: [],
            loading: true
        });
    
        useEffect( () => {
    
            getActividad( rut )
                .then( actividad => {
                    
                    setState({
                        data: actividad,
                        loading: false
                    });
                })
    
        }, [rut])
    
        return state; // { data:[], loading: true };

    }
    catch(err){
        throw console.log(err);
    }
    
}
