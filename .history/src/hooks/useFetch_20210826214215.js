import { useEffect, useState } from 'react'
import { getActividad } from '../helpers/getActividad';

export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getActividad( category )
            .then( imgs => {
                
                setState({
                    data: imgs,
                    loading: false
                });
            })

    }, [category])

    return state; // { data:[], loading: true };

//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const response = fetch(url);
//         const data = response.json();
//         const [item] = data.result;
//         setData(item);
//         setLoading(false);
//     }, []);

//     return { data, loading };


// };


    //     setState({ data: [], success: true, message: null });
        
    //     fetch( url )
    //         .then( resp => resp.json() )
    //         .then( data => {
    //             setState({
    //                 success: true,
    //                 message: "Rut Correcto",
    //                 data
    //             })
    //         });

    // }, [url]);

    // return state;