export function StrictModeEffect() {
    const hasMounted = useRef(false)
    useEffect(() => {
  if (hasMounted.current === false) {
    console.log('Mounted')
    hasMounted.current = true
  }
  },[])
    return <div>StrictMode Effect</div>
}