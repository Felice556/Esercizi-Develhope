import { Age } from "./Age";
export type WelcomeProps = {
    name?: string
    age?: number
    
}

export function Welcome({name = "World" , age = 0}: WelcomeProps) {
    return (
        <div>
            <p>Welcome, <strong>{name}</strong>!</p>
            <Age age={age} />
            
        </div>
    )
    
}