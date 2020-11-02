// import React, { useEffect,useState } from 'react'

// export const Tests = () => {
//     const [second, setSecond] = useState(0);
//     const [stop, setStop] = useState(true)

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setSecond(seconds => ++seconds);
//         }, 1000);
//         let temp = second
//         temp = ++temp
        
//         setSecond(temp)
//     }, [stop]);

//     return (
//         <div>

//             {second}<br/><br/>

//             <button onClick={()=>setStop(false)}>Stop</button>  &nbsp;&nbsp;
//             <button onClick={()=>setStop(true)}>Start</button>
//         </div>
//     )
// }
