import React, { useState, useEffect } from 'react'

export const Timer = () => {

    const [sec, updateSec] = useState(0)
    const [stop, setStop] = useState(true)
    const [interval, updateInterval] = useState()

    const start = (val) => {
        if (val) {
            setStop(false)
            console.log(val, "start / val = true")
            let temp = sec
            updateInterval(setInterval(() => {
                temp = ++temp
                updateSec(temp)
            }, 1000)
            )
        } else {
            console.log(val, "start / val = false")
            clearInterval(interval)
            setStop(true)
            console.log(interval, "interval in else")


        }
    }

    return (
        <div>
            {console.log(sec, "sec")}
            {sec}<br /><br />
            <button>Lap</button> | {stop ? <button onClick={() => { start(true) }}>Start</button> : <button onClick={() => { start(false) }}>Stop</button>}

        </div>
    )
}
