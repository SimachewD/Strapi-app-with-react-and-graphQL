import { useEffect, useState } from "react"


export default function useFetch(url) {

    const [ data, setData ] = useState(null)
    const [ isloading, setIsLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(()=>{
        const fetchData = async ()=>{

            setIsLoading(true)

            try {
                
                const res = await fetch(url)
                const json = await res.json()

                setData(json)
                setIsLoading(false)

            } catch (error) {
                
                setError(error)
                setIsLoading(false)

            }

        }

        fetchData()

    }, [url])

  return (
    { data, error, isloading }
  )
}
