import { describe, expect, it, beforeEach, afterEach, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { GithubUser } from './GithubUser'

function mockFetchResponse(data: unknown, ok = true, status = 200): Response {
  return {
    ok,
    status,
    json: () => Promise.resolve(data),
  } as Response
}

describe('GithubUser', () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('shows a loading state initially', () => {
    vi.mocked(globalThis.fetch).mockImplementation(
      () => new Promise(() => {}) // Promise che non si risolve mai
    )

    render(<GithubUser username="octocat" />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('renders the user data after a successful fetch', async () => {
    const mockUser = {
      name: 'The Octocat',
      login: 'octocat',
      avatar_url: 'https://example.com/avatar.png',
    }

    vi.mocked(globalThis.fetch).mockResolvedValue(mockFetchResponse(mockUser))

    render(<GithubUser username="octocat" />)

    await waitFor(() => {
      expect(screen.getByText('The Octocat')).toBeInTheDocument()
    })

    expect(screen.getByText('octocat')).toBeInTheDocument()
    expect(screen.getByAltText('The Octocat')).toHaveAttribute(
      'src',
      'https://example.com/avatar.png'
    )
  })

  it('calls fetch with the correct GitHub API URL', () => {
    vi.mocked(globalThis.fetch).mockResolvedValue(mockFetchResponse({}))

    render(<GithubUser username="octocat" />)

    expect(globalThis.fetch).toHaveBeenCalledWith(
      'https://api.github.com/users/octocat'
    )
  })

  it('shows an error message when the GitHub API returns a non-ok response', async () => {
    vi.mocked(globalThis.fetch).mockResolvedValue(
      mockFetchResponse({}, false, 404)
    )

    render(<GithubUser username="nonexistent-user-xyz" />)

    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument()
    })
  })

  it('shows an error message when fetch rejects (network failure)', async () => {
    vi.mocked(globalThis.fetch).mockRejectedValue(new Error('Network error'))

    render(<GithubUser username="octocat" />)

    await waitFor(() => {
      expect(screen.getByText('Error: Network error')).toBeInTheDocument()
    })
  })
})