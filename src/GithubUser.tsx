import { useState, useEffect } from "react"
export function GithubUser({username}: {username: string}) {
    const [user, setUser] = useState<any>(null) 
    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [username])
    if (!user) return <div>Loading...</div>
    return (
        <div>  
            <h1>{user.name}</h1>
            <h2>{user.login}</h2>
            <img src={user.avatar_url} alt={user.name} />
        </div>
    )
}
