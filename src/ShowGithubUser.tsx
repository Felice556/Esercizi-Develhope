import { useParams } from "react-router-dom";


export function ShowGithubUser() {
    const { username } = useParams();
    return (
   <GithubUser username={username} />
    )
}

