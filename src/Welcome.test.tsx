import { render, screen } from '@testing-library/react'
import { Welcome } from './welcome'

describe('Welcome', () => {
  it('renders default welcome message when no props are given', () => {
    const { container } = render(<Welcome />)
    expect(container).toHaveTextContent('Welcome, World!')
  })

  it('renders the provided name in the welcome message', () => {
    const { container } = render(<Welcome name="Alice" />)
    expect(container).toHaveTextContent('Welcome, Alice!')
  })

  it('renders 5 Age components when age is 20 and name is John', () => {
    render(<Welcome age={20} name="John" />)
    const ageElements = screen.getAllByText('Your age is 20')
    expect(ageElements).toHaveLength(5)
  })

  it('renders only 2 Age components when age is 10 and name is Mario', () => {
    render(<Welcome age={10} name="Mario" />)
    const ageElements = screen.getAllByText('Your age is 10')
    expect(ageElements).toHaveLength(2)
  })

  it('renders only 1 Age component when age is 0 (default)', () => {
    render(<Welcome />)
    const ageElements = screen.getAllByText('Your age is 0')
    expect(ageElements).toHaveLength(1)
  })
})