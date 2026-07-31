import { useState, useEffect } from "react"

type GithubUserData = {
  name: string
  login: string
  avatar_url: string
}

export function GithubUser({ username }: { username: string }) {
  const [user, setUser] = useState<GithubUserData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchUser() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`https://api.github.com/users/${username}`)
        if (!res.ok) {
          throw new Error(`GitHub API error: ${res.status}`)
        }
        const data: GithubUserData = await res.json()
        if (!cancelled) setUser(data)
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Unknown error")
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchUser()

    return () => {
      cancelled = true
    }
  }, [username])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!user) return null

  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.login}</h2>
      <img src={user.avatar_url} alt={user.name} />
    </div>
  )
}