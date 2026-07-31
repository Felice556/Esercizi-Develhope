import { Age } from "./Age";
import { Message } from "./Message";

export type WelcomeProps = {
    name?: string
    age?: number
}

export function Welcome({ name = "World", age = 0 }: WelcomeProps) {
    const conditions = [
        true,
        age > 18,
        Boolean(age),
        age > 18 && age < 65,
        age > 18 && name === "John",
    ]

    return (
        <div>
            <p>Welcome, <strong>{name}</strong>!</p>
            {conditions.map((show, i) => show && <Age key={i} age={age} />)}
            <Message age={age} />
        </div>
    )
}