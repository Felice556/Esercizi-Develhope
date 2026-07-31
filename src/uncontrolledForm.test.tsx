import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { UncontrolledLogin } from './UncontrolledForm'

describe('UncontrolledLogin', () => {
  it('renders username and password fields and a submit button', () => {
    render(<UncontrolledLogin />)

    expect(screen.getByLabelText('Username:')).toBeInTheDocument()
    expect(screen.getByLabelText('Password:')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
  })

  it('logs the entered username and password on submit', () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})

    render(<UncontrolledLogin />)

    const usernameInput = screen.getByLabelText('Username:')
    const passwordInput = screen.getByLabelText('Password:')
    const submitButton = screen.getByRole('button', { name: 'Submit' })

    fireEvent.change(usernameInput, { target: { value: 'mario123' } })
    fireEvent.change(passwordInput, { target: { value: 'supersegreta' } })
    fireEvent.click(submitButton)

    expect(consoleSpy).toHaveBeenCalledWith('Submitted')
    expect(consoleSpy).toHaveBeenCalledWith('mario123')
    expect(consoleSpy).toHaveBeenCalledWith('supersegreta')

    consoleSpy.mockRestore()
  })

  it('prevents the default form submission behavior', () => {
    render(<UncontrolledLogin />)

    const submitButton = screen.getByRole('button', { name: 'Submit' })
    const form = submitButton.closest('form')!

    const submitHandler = vi.fn((e: Event) => e.preventDefault())
    form.addEventListener('submit', submitHandler)

    fireEvent.click(submitButton)

    expect(submitHandler).toHaveBeenCalled()
  })
})