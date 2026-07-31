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
    const ageElements = screen.getAllByTestId('age-display')
    expect(ageElements).toHaveLength(5)
  })

  it('renders only 2 Age components when age is 10 and name is Mario', () => {
    render(<Welcome age={10} name="Mario" />)
    const ageElements = screen.getAllByTestId('age-display')
    expect(ageElements).toHaveLength(2)
  })

  it('renders only 1 Age component when age is 0 (default)', () => {
    render(<Welcome />)
    const ageElements = screen.getAllByTestId('age-display')
    expect(ageElements).toHaveLength(1)
  })

  it('does not render age > 18 conditional blocks when age is 5', () => {
    render(<Welcome age={5} name="Mario" />)
    // solo "sempre" e "truthy" sono vere → 2 elementi attesi, 0 dagli altri 3 blocchi
    const ageElements = screen.queryAllByTestId('age-display')
    expect(ageElements).toHaveLength(2)
  })
})