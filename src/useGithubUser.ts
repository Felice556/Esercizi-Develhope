import { useQuery } from '@tanstack/react-query'

export function useGithubUser(username: string) {
    const { data, isLoading, error } = useQuery({
        queryKey: ['githubUser', username],
        queryFn: () => fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json()),
              enabled: username !== null 
    })

    return { user: data, loading: isLoading, error }
}