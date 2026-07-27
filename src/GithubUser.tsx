import { useState, useEffect } from "react";



export type GithubUserProps = {
    username: string
}

export function GithubUser({ username }: GithubUserProps) {
    const [user, setUser] = useState<any>(null);
    
    useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
        .then((data) => setUser(data));
}, [username]);

if (user === null) {
    return <p>Loading...</p>;
}

return (
    <div>
        <h1>{user.name}</h1>
        <p>{user.bio}</p>
    </div>
);

}