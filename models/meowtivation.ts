// Complete meowtivation card with embedded image and quote
export interface MeowtivationData {
  imageUrl: string
  quoteText: string
  quoteAuthor?: string
  title: string
  userId: number
  isPublic?: boolean
}

export interface Meowtivation extends MeowtivationData {
  id: number
  likesCount: number
  createdAt: string
  updatedAt: string
}

// Comments on meowtivation cards
export interface CommentData {
  meowtivationId: number
  userId: number
  comment: string
}

export interface Comment extends CommentData {
  id: number
  createdAt: string
  updatedAt: string
}

// AI-generated quote suggestions
export interface QuoteSuggestion {
  text: string
  title: string
  author?: string
}

// Cat image suggestions from API
export interface ImageSuggestion {
  id: string
  url: string
  width: number
  height: number
}

export interface UserData {
  auth0_id: string
  username: string
  email: string
  avatar_url: string
}

export interface User extends UserData {
  id: number
}
export interface newUser {
  username: string
  email: string
  avatar_url: string
}
