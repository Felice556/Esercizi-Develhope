export function UncontrolledLogin() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        console.log('Submitted')
        const formData = new FormData(event.currentTarget)
        console.log(formData.get('username'))
        console.log(formData.get('password'))
    }
    return (
        <div>
            <h1>Uncontrolled Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text"  name="username" />
                </label>
                <label>
                    Password:
                    <input type="password" name ="password" />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}