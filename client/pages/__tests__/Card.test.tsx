// @vitest-environment jsdom
import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom/vitest'
import Card from "@/components/Card"

const mockMeowtivation = {
  id: 1,
  imageUrl: 'https://example.com/cat.jpg',
  quoteText: 'You can do it!',
  quoteAuthor: 'Whiskers',
  title: 'Stay Pawsitive',
  userId: 123,
  isPublic: true,
  likesCount: 99,
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