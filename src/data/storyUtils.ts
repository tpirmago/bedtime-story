import type { Story } from './stories'

export const getStoriesByCategory = (stories: Story[], category: string): Story[] =>
  stories.filter((s) => s.category === category)

export const getUnreadStories = (stories: Story[], readIds: string[]): Story[] =>
  stories.filter((s) => !readIds.includes(s.id))

export const getRandomStory = (stories: Story[]): Story =>
  stories[Math.floor(Math.random() * stories.length)]
