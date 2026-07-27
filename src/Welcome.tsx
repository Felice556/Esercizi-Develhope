import { Age } from "./Age";
import { Message } from "./Message";
export type WelcomeProps = {
    name?: string 
    age?: number 
    
}

export function Welcome({name = "World" , age = 0}: WelcomeProps) {
    return (
        <div>
            <p>Welcome, <strong>{name}</strong>!</p>
            <Age age={age} />
            {age> 18 && <Age age={age} />}
            {age && <Age age={age} />}
            {age > 18 && age < 65 && <Age age={age} />}
            {age > 18 && name === "John" && <Age age={age} />}
            <Message age={age} />
            
            
        </div>
    )
    
}