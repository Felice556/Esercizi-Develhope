import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./welcome";
import { Routes, Route , Link } from "react-router-dom";
import { Counter } from "./counter";
import { ShowGithubUser } from "./ShowGithubUser";
import { GithubUserList } from "./GithubUserlist";

export function App() {
 
  return (
    
    <div>
      <HelloWorld />
      <Routes>
      <Route path="/" element= {<Welcome name = "John" age = {20} /> } />
      <Route path="/counter" element={<Counter />} />
    <Route path="/users" element={<GithubUserList />}>
    <Route index element={<div>Aggiungi un utente e selezionalo</div>} />
    <Route path=":username" element={<ShowGithubUser />} />

</Route>
      <Route path="*" element={<div>Not found</div>} />
       </Routes>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/users/felice">Felice</Link>
    </div>
   
  )
}