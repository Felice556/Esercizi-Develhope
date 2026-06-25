
import {useState} from 'react'


export function Login() {
   const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
    return (
        <div>
            <h1>Login</h1>
            <form>
                <label>
                    Username:
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit" style ={{backgroundColor: password.length >= 8 ? 'green' : 'red'}}>Login</button>
            </form>
        </div>
    )
}