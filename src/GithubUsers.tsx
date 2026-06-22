export function GithubUsers() { 
    const [users, setUsers] = useState<any[]>([])
    const [selectedUsername, setSelectedUsername] = useState<string | null>(null)
    useEffect(() => {
        fetch('https://api.github.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            {users.map(user => (
                <div key={user.id} onClick={() => setSelectedUsername(user.login)}>
                    
                    <h2>{user.login}</h2>
                    <img src={user.avatar_url} alt={user.name} />
                </div>
                
            ))}
            {selectedUsername && <GithubUser username={selectedUsername} />}
        </div>
    )
}