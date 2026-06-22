export function useCurrentLocation() {
    const [location, setLocation] = useState<any>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<any>(null)
    
    const getCurrentLocation = () => {
        setLoading(true)
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation(position)
                setLoading(false)
            },
            (err) => {
                setError(err)
                setLoading(false)
            }
        )
    }

    useEffect(() => {
        getCurrentLocation()
    }, [])  

    return { location, loading, error, getCurrentLocation }
}