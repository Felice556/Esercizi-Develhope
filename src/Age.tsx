import { Welcome } from "./Welcome";
export type AgeProps = {
    age?: number
}

export function Age({age = 0}: AgeProps) {
    return (
        <div>
            <p>Your age is {age}</p>
        </div>
    )
    
}