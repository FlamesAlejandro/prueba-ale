import { useEffect, useState } from 'react'
import { getActividad } from '../helpers/getActividad';
import { getAmount } from '../helpers/getAmount';
import { getDataList } from '../helpers/getDataList';

export const useFetchActividad = ( rut, actividad ) => {

    try{

        const [state, setState] = useState({
            data: [],
            loading: true
        });
    
        useEffect( () => {
    
            getAmount( rut, actividad )
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
