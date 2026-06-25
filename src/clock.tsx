import { useEffect, useState } from 'react'
import './clock.scss'

export function Clock() {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    return (
        <div className="clock">
            <h1 >Clock</h1>
            <p>{date.toLocaleTimeString()}</p>
        </div>
    )
}