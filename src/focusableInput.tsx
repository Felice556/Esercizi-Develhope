import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
export function FocusableInput() {
    const [username, setUsername] = useState('')
    return (
        <Form>
            <Form.Control type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <Button variant="primary" type="submit" style={{ borderRadius: '10px' }}>
                    Submit
                </Button>
        </Form>
    )
}