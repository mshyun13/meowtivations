// @vitest-environment jsdom
import { describe, it, expect, afterEach } from "vitest"
import { fireEvent, render, screen, cleanup } from "@testing-library/react"
import '@testing-library/jest-dom/vitest'

import Card from "@/components/Card"

afterEach(cleanup)

const mockMeowtivation = {
  id: 1,
  imageUrl: 'https://example.com/cat.jpg',
  quoteText: 'You can do it!',
  quoteAuthor: 'Whiskers',
  title: 'Stay Pawsitive',
  userId: 123,
  isPublic: true,
  likesCount: 5,
  createdAt: '',
  updatedAt: '',
}

describe('<Card />', () => {
  it('renders title, quote, and author', () => {
    render(<Card meowtivation={mockMeowtivation} onClick={() => {}} />)

    expect(screen.getByText(/stay pawsitive/i)).toBeInTheDocument()
    expect(screen.getByText(/you can do it/i)).toBeInTheDocument()
    expect(screen.getByText(/whiskers/i)).toBeInTheDocument()
  })

  it('renders the image with correct src', () => {
    render(<Card meowtivation={mockMeowtivation} onClick={() => {}} />)

    const [image] = screen.getAllByAltText(/meowtivational cat/i)
    expect(image).toHaveAttribute('src', mockMeowtivation.imageUrl)
  })
})

describe('<Card /> like button', () => {
  it('toggles heart icon and updates like count on click', () => {
    render(<Card meowtivation={mockMeowtivation} />)

    const button = screen.getByRole('button', { name: 'like-button' })
    const count = screen.getByText((_, node) => node?.textContent === '5')

    expect(button).toHaveTextContent('🤍')
    expect(count).toBeInTheDocument()

    fireEvent.click(button)
    expect(button).toHaveTextContent('❤️')
    expect(screen.getByText((_, node) => node?.textContent === '6')).toBeInTheDocument()

    fireEvent.click(button)
    expect(button).toHaveTextContent('🤍')
    expect(screen.getByText((_, node) => node?.textContent === '5')).toBeInTheDocument()
  })
})