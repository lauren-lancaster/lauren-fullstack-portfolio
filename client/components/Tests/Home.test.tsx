// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../Home'

describe('test setup working', () => {
  it('its working', () => {
    expect(1 + 1).toBe(2)
  })
})

describe('Home />', () => {
  it('has a heading', () => {
    render(<Home />)
    const title = screen.getByText('Lauren Lancaster')
    expect(title.textContent).toBe('Lauren Lancaster')

    const heading = screen.getByRole('heading')
    expect(heading.textContent).toBe('Lauren Lancaster')
  })
})
