import { Welcome } from "./Welcome";
import { Age } from "./Age";

export function Message() {
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