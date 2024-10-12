import { useState, useEffect } from "react";

export default function Timer({onTimeOut,timeOut}){

    //This function keeps rendering as even though timeout is a constANT VALUE PASSED but for the ontimeout prop a function is assed which everytime the Quiz component runs is reevaluated andsince two function no matter how same they look, they are not same  in memory, this settimeout function keeps rendering.
    const [remainingTime, setRemainingTime] = useState(timeOut)
    useEffect(()=>{
        const timer = setTimeout(onTimeOut,timeOut);

        return ()=>{
            clearTimeout(timer)
        }
    },[onTimeOut,timeOut])
    

    useEffect(()=>{
        const interval = setInterval(()=>{
            setRemainingTime((prevRemainingTime)=>prevRemainingTime-100)
        },100)

        return ()=>{
            clearInterval(interval)
        }
    },[])
    

    return <progress className="bg-gray-300 text-stone-600 h-2.5 rounded-full" max={timeOut} value={remainingTime}/>
}