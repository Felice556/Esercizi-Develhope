export type MessageProps = {
    age?: number
}

export function Message({ age = 0 }: MessageProps) {
    return (
        <div>
            {age > 18 ? (
                <p>You are old enough!</p>
            ) : (
                <p>You are very young!</p>
            )}
        </div>
    )
}