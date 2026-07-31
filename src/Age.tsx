export type AgeProps = {
    age?: number
}

export function Age({ age = 0 }: AgeProps) {
    return (
        <div>
            <p data-testid="age-display">Your age is {age}</p>
        </div>
    )
}