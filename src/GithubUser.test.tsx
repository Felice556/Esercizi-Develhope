import { describe, it, beforeEach, afterEach, vi, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { GithubUser } from './GithubUser'

describe('GithubUser', () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('shows a loading state initially', () => {
    globalThis.fetch = vi.fn(() => new Promise(() => {})) as any // Promise che non si risolve mai

    render(<GithubUser username="octocat" />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('renders the user data after a successful fetch', async () => {
    const mockUser = {
      name: 'The Octocat',
      login: 'octocat',
      avatar_url: 'https://example.com/avatar.png',
    }

    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockUser),
      })
    ) as any

    render(<GithubUser username="octocat" />)

    // Aspettiamo che il componente esca dallo stato di loading
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
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
      })
    ) as any

    render(<GithubUser username="octocat" />)

    expect(globalThis.fetch).toHaveBeenCalledWith(
      'https://api.github.com/users/octocat'
    )
  })
})