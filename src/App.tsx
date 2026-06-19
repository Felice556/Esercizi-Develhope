import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./Welcome";

export function App() {
  const nameStrong = <strong>Felice</strong>
  return (
    <div>
      <HelloWorld />
      <Welcome name={nameStrong} age={25} />
    </div>
  )
}