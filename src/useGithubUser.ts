export function useGithubUser(username: string) {
    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<any>(null)

    const fetchUser = () => {        // 👈 funzione separata
        setLoading(true)
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(data => {
                setUser(data)
                setLoading(false)
            })
            .catch(err => {
                setError(err)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchUser()                  
    }, [username])  

    return { user, loading, error, fetchUser }  
}