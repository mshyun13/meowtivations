// @vitest-environment jsdom
import { describe, it, expect, afterEach, beforeAll } from 'vitest'
import {
  fireEvent,
  render,
  screen,
  cleanup,
  waitFor,
} from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@testing-library/jest-dom/vitest'

import Card from '@/components/Card'
import nock from 'nock'

afterEach(cleanup)

beforeAll(() => {
  nock.disableNetConnect()
})

const queryClient = new QueryClient()

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
    render(
      <QueryClientProvider client={queryClient}>
        <Card meowtivation={mockMeowtivation} onClick={() => {}} />
      </QueryClientProvider>,
    )

    expect(screen.getByText(/stay pawsitive/i)).toBeInTheDocument()
    expect(screen.getByText(/you can do it/i)).toBeInTheDocument()
    expect(screen.getByText(/whiskers/i)).toBeInTheDocument()
  })

  it('renders the image with correct src', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Card meowtivation={mockMeowtivation} onClick={() => {}} />
      </QueryClientProvider>,
    )

    const [image] = screen.getAllByAltText(/meowtivational cat/i)
    expect(image).toHaveAttribute('src', mockMeowtivation.imageUrl)
  })
})

describe('<Card /> like button', () => {
  it('toggles heart icon and updates like count on click', async () => {
    const scope1 = nock('http://localhost:3000')
      .patch(`/api/v1/meowtivations/1/like`)
      .reply(200, { likesCount: 6 })

    const scope2 = nock('http://localhost:3000')
      .patch(`/api/v1/meowtivations/1/like`)
      .reply(200, { likesCount: 5 })

    render(
      <QueryClientProvider client={queryClient}>
        <Card meowtivation={mockMeowtivation} />
      </QueryClientProvider>,
    )

    const button = screen.getByRole('button', { name: 'like-button' })
    const count = screen.getByText((_, node) => node?.textContent === '5')

    expect(button).toHaveTextContent('🤍')
    expect(count).toBeInTheDocument()

    await fireEvent.click(button)

    await waitFor(() => {
      expect(button).toHaveTextContent('❤️')
    })

    await waitFor(() => {
      expect(
        screen.getByText((_, node) => node?.textContent === '6'),
      ).toBeInTheDocument()
    })

    await fireEvent.click(button)

    await waitFor(() => {
      expect(button).toHaveTextContent('🤍')
    })

    await waitFor(() => {
      expect(
        screen.getByText((_, node) => node?.textContent === '5'),
      ).toBeInTheDocument()
    })

    expect(scope1.isDone()).toBe(true)
    expect(scope2.isDone()).toBe(true)
  })
})
