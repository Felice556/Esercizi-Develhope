import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./Welcome";

export function App() {
 
  return (
    <div>
      <HelloWorld />
      <Welcome name={"Felice"} age={25} />
    </div>
  )
}