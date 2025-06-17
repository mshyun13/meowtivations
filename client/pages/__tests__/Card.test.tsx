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

    expect(screen.getByText(/Stay Pawsitive/i)).toBeInTheDocument()
    expect(screen.getByText(/You can do it!/i)).toBeInTheDocument()
    expect(screen.getByText(/Whiskers/i)).toBeInTheDocument()
  })

  it('renders the image with correct src', () => {
    render(<Card meowtivation={mockMeowtivation} onClick={() => {}} />)

    const images = screen.getAllByAltText('Meowtivational cat')
    expect(images[0]).toHaveAttribute('src', mockMeowtivation.imageUrl)
  })
})