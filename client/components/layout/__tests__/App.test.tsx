//@vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { renderRoute } from '@/test/setup'
import { within } from '@testing-library/react'

describe('App layout renders correctly', () => {
  it('shows the navbar with correct navigation links', async () => {
    const screen = renderRoute('/')

    // Find the navigation element
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()

    // Check for the logo/home link
    const homeLink = await screen.findAllByRole('link', {
      name: /Meowtivation/i,
    })
    expect(homeLink[0]).toBeInTheDocument()

    // Check for navigation links
    const navLinks = within(nav).getByRole('list')

    // Home link
    const homeNavLink = within(navLinks).getByText('Home')
    expect(homeNavLink).toBeInTheDocument()
    expect(homeNavLink.closest('a')).toHaveAttribute('href', '/')

    // Random link
    const randomLink = within(navLinks).getByText('Random')
    expect(randomLink).toBeInTheDocument()
    expect(randomLink.closest('a')).toHaveAttribute('href', '/random')

    // Gallery link
    const galleryLink = within(navLinks).getByText('Gallery')
    expect(galleryLink).toBeInTheDocument()
    expect(galleryLink.closest('a')).toHaveAttribute('href', '/gallery')

    // Add Pet link
    const createLink = within(navLinks).getByText('Create')
    expect(createLink).toBeInTheDocument()
    expect(createLink.closest('a')).toHaveAttribute('href', '/create')
  })

  it('shows the footer with copyright information', async () => {
    const screen = renderRoute('/')

    // Check for copyright text
    const copyright = screen.getByText(/2024 Copyright/i)
    expect(copyright).toBeInTheDocument()

    // Check for the Meowtivation link in footer
    const meowtivationLink = screen.getAllByRole('link', {
      name: 'Meowtivation',
    })
    expect(meowtivationLink[1]).toBeInTheDocument()
    expect(meowtivationLink[1]).toHaveAttribute('href', '/about')
  })
})
