import {useState, useEffect} from 'react'

export const useMircha = (url) => {
    
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async (url) => {
            let res = await fetch(url)
        }
    }, [input])

}
