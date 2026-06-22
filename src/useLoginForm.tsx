export function useLoginForm() {
    const [state, setState] = useState({ username: '', password: '' })
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    
    return { state, handleChange }
}