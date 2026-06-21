type LoginState = { username: string, password: string, remember: boolean }

export function Login({ onLogin }: { onLogin: (state: LoginState) => void }) {
    const [state, setState] = useState({ username: '', password: '', remember: false })
    return (
        <div>
            <form>
                <label>
                    Username:
                    <input type="text" name="username"  value = {state.username} onChange={(e) => setState({ ...state, username: e.target.value })} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={state.password} onChange={(e) => setState({ ...state, password: e.target.value })} />
                </label>
                <label>
                    Remember me:
                    <input type="checkbox" name="remember" checked={state.remember} onChange={(e) => setState({ ...state, remember: e.target.checked })} />
                </label>
                <button type="submit" disabled = {state.username === '' || state.password === ''} onClick={() => onLogin(state) }>Submit</button>
                <button type="button" onClick={() => setState({ username: '', password: '', remember: false })}>Clear</button>
            </form>
        </div>
    )
}