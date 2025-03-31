//@vitest-environment jsdom
import { describe, it, expect, beforeAll, vi, afterEach } from 'vitest'
import nock from 'nock'

import { renderRoute } from '../../test/setup.tsx'

beforeAll(() => {
  nock.disableNetConnect()
  vi.spyOn(console, 'error').mockImplementation(() => {})
})

afterEach(() => {
  vi.clearAllMocks()
})

const mockMeowtivation = {
  id: 1,
  imageUrl: 'https://example.com/cat.jpg',
  quoteText: 'Meow your way to success',
  quoteAuthor: 'Sir Whiskers',
  title: 'Motivational Meow',
  userId: 'user123',
  isPublic: true,
  likesCount: 42,
  createdAt: '2025-06-16T07:23:28Z',
  updatedAt: '2025-06-16T07:23:28Z',
}

describe('Meowtivation rendering tests', () => {
  it('renders a meowtivation card', async () => {
    // ARRANGE
    const scope = nock('http://localhost:3000')
      .get(`/api/v1/meowtivations/random`)
      .reply(200, mockMeowtivation)

    // ACT
    const screen = renderRoute(`/random`)

    // ASSERT
    const title = await screen.findByRole('heading', { level: 3 })
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent(mockMeowtivation.title)

    const quote = await screen.findByText(`"${mockMeowtivation.quoteText}"`)
    expect(quote).toBeInTheDocument()

    const author = await screen.findByText(`— ${mockMeowtivation.quoteAuthor}`)
    expect(author).toBeInTheDocument()

    expect(scope.isDone()).toBe(true)
  })

  it('Renders loading message', async () => {
    // ARRANGE
    const scope = nock('http://localhost:3000')
      .get(`/api/v1/meowtivations/random`)
      .reply(200, mockMeowtivation)

    // ACT
    const screen = renderRoute(`/random`)

    // ASSERT
    const loading = await screen.findByText('Loading your meowtivation...')
    expect(loading).toBeVisible()
    expect(scope.isDone()).toBe(true)
  })

  it('should render an error message when things go wrong', async () => {
    // ARRANGE
    const scope = nock('http://localhost:3000')
      .get(`/api/v1/meowtivations/random`)
      .reply(500)

    // ACT
    const screen = renderRoute(`/random`)

    // ASSERT
    const error = await screen.findByText(
      'There was an error fetching your meowtivation',
    )
    expect(error).toBeVisible()
    expect(scope.isDone()).toBe(true)
  })
})
