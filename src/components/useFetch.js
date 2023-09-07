import {useState, useEffect} from 'react'

const useFetch=(request)=>{
    const[data,setData]=useState(null)
    const[pending,setPending]=useState(true)
    const[error,setError]=useState(null)


useEffect(()=>{
    setTimeout(() => {
        fetch(request)
        .then((response)=>{
            if(response.ok==false){
                throw Error("Data not found")
            }
            else{
                return (response.json())
            }
        })
        .then((data)=>{setData(data);setPending(false)})
        .catch((error)=>{setError(error);setPending(false)})
        
    }, 1000);
},[])
return {data,pending,error}
}
export default useFetch