import { useGithubUser } from './useGithubUser'

export function GithubUser({username}: {username: string}) {
    const { user } = useGithubUser(username)
    if (!user) return <div>Loading...</div>
    return (
        <div>  
            <h1>{user.name}</h1>
            <h2>{user.login}</h2>
            <img src={user.avatar_url} alt={user.name} />
        </div>
    )
}