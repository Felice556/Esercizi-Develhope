import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./welcome";
import { Routes, Route } from "react-router-dom";
import { Counter } from "./counter";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
 
  return (
    
    <div>
      <HelloWorld />
      <Routes>
      <Route path="/" element= {<Welcome name = "John" age = {20} /> } />
      <Route path="/counter" element={<Counter />} />
      <Route path="/users/:username" element={<ShowGithubUser />} />
       </Routes>
    </div>
   
  )
}