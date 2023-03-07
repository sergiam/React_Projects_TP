import { useEffect, useState } from "react"
import './styles.css'
export const Clock = () => {
    
    const [milisecondsState, setMilisecondsState] = useState()
    const [secondsState, setSecondsState] = useState()
    const [minutesState, setMinutesState] = useState()
    const [hoursState, setHoursState] = useState()
    const [showTimeState, setShowTimeState] = useState(false)

    const date = new Date();
   

    useEffect(() => {
        console.log("test")
        setShowTimeState(true)
    },[secondsState]);

        setTimeout(() => {
            console.log("test2")
            setSecondsState(date.getSeconds());
            if(showTimeState===true){
                setHoursState(date.getHours());
                setMinutesState(date.getMinutes());
                setMilisecondsState(date.getMilliseconds());
                setShowTimeState(false);
            }
        },"1000");
    
    return(
        <div>
            <div id='list-container'>
                <p>{hoursState}:</p>
                <p>{minutesState}:</p>
                <p>{secondsState}:</p>
                <p>{milisecondsState}</p>
            </div>
        </div>
    )
}

export default Clock