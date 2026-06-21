export function Counter({ initialValue }: { initialValue: number }) {
    const [count, setCount] = useState(initialValue)
    const directionRef = useRef('')
   useEffect(() => {
    const newDirection = count > initialValue ? 'up' : 'down'
    if (newDirection !== directionRef.current) {
      console.log(`Count changed from ${directionRef.current} to ${newDirection}`)
      directionRef.current = newDirection
    }
}, [count])
    return (
        <div>
            <button onClick={() => setCount(count - 1)}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}