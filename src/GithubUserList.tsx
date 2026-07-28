import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";



export function GithubUserList() {
    const [users, setUsers] = useState<any[]>([]);
    
    useEffect(() => {
    fetch(`https://api.github.com/users`)
        .then((res) => res.json())
        .then((data) => setUsers(data));
}, []);



return (
    <div>
    <ul>
        {users.map((user) => (
            <li key={user.login}>
                <Link to={`/users/${user.login}`}>{user.login}</Link>
            </li>
        ))}
    </ul>
    <Outlet />
    </div>
);

}
