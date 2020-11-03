import React, { useState } from 'react'

export const Timer = () => {

    const [sec, updateSec] = useState(0)
    const [stop, setStop] = useState(true)
    const [interval, updateInterval] = useState()
    const [lap, updateLap] = useState([]);

    const start = (val) => {
        if (val) {
            setStop(false)
            console.log(val, "start / val = true")
            updateInterval(setInterval(() => {
                updateSec(prev => ++prev)
            }, 10)
            )
        }
        else {
            console.log(val, "start / val = false")
            clearInterval(interval)
            setStop(true)
            console.log(interval, "interval in else")


        }
    }

    const Lap = () => {
        let temp = [...lap]
        temp.push(sec)
        updateLap(temp)
        console.log(lap, "lap")
    }





    return (
        <div>
            {console.log(sec, "sec")}
            <span>TIME : {String(parseInt(sec/60)).padStart(2,'0')}s : {String(sec%60).padStart(2,'0')}<br /><br /></span>

            <button onClick={Lap}>Lap</button> | {stop ? <button onClick={() => { start(true) }}>Start</button> : <button onClick={() => { start(false) }}>Stop</button>}
            <span><br /><br />LAP:{lap.map((item, index) => {
                return <div key={index}>  {String(parseInt(item/60)).padStart(2,'0')} : {String(item%60).padStart(2,'0')}</div>
            })}</span>

        </div>
    )
}
