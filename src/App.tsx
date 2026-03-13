import { useState, useRef } from 'react'
import { Moon } from 'lucide-react'
import confetti from 'canvas-confetti'

import { stories } from './data/stories'
import type { Story } from './data/stories'
import { getStoriesByCategory, getUnreadStories, getRandomStory } from './data/storyUtils'
import CategorySelector from './components/CategorySelector'
import PickButton from './components/PickButton'
import StoryCard from './components/StoryCard'
import StoryGallery from './components/StoryGallery'

const STORAGE_KEY = 'bedtime_read_ids'

function loadReadIds(): string[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
  } catch {
    return []
  }
}

function saveReadIds(ids: string[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
}

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [currentStory, setCurrentStory] = useState<Story | null>(null)
  const [allRead, setAllRead] = useState(false)
  const [readIds, setReadIds] = useState<string[]>(loadReadIds)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const storyRef = useRef<HTMLDivElement>(null)

  function pickStory() {
    const pool = selectedCategory ? getStoriesByCategory(stories, selectedCategory) : stories
    const unread = getUnreadStories(pool, readIds)

    if (unread.length === 0) {
      setAllRead(true)
      return
    }

    const story = getRandomStory(unread)
    const newReadIds = [...readIds, story.id]
    setReadIds(newReadIds)
    saveReadIds(newReadIds)
    setCurrentStory(story)
    setAllRead(false)

    if (currentStory) {
      setTimeout(() => storyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
    }

    confetti({
      particleCount: 60,
      spread: 80,
      origin: { y: 0.5 },
      shapes: ['star'],
      colors: ['#facc15', '#fde68a', '#ffffff', '#c4b5fd', '#a5b4fc'],
      scalar: 1.2,
      gravity: 0.6,
      drift: 0,
    })
  }

  function handleSelectCategory(cat: string | null) {
    setSelectedCategory(cat)
    setAllRead(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-slate-900 flex items-center justify-center p-6 relative">
      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="stars" />
      </div>

      {/* Card */}
      <div className="max-w-md md:max-w-2xl w-full bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white shadow-xl relative z-10">

        {/* Moon glow */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-yellow-200 moon-glow" />
        </div>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Moon className="w-5 h-5 text-yellow-200" />
            <h1 className="text-2xl font-bold tracking-tight">Bedtime Story</h1>
          </div>
          <p className="text-sm text-white/60">Pick a short story for tonight</p>
        </div>

        {/* Category selector */}
        <CategorySelector selected={selectedCategory} onSelect={handleSelectCategory} />

        {/* Pick button + View all */}
        <div className="flex justify-center gap-3">
          <PickButton onClick={pickStory} disabled={false} hasStory={!!currentStory} />
          <button
            onClick={() => setGalleryOpen(true)}
            className="px-5 rounded-xl py-3 font-semibold text-white/70 bg-white/10 hover:bg-white/20 hover:text-white hover:scale-[1.02] transition-all duration-200 cursor-pointer text-sm"
          >
            View all stories
          </button>
        </div>

        <StoryGallery
          open={galleryOpen}
          onClose={() => setGalleryOpen(false)}
          onSelect={story => { setCurrentStory(story); setAllRead(false) }}
          readIds={readIds}
        />

        {/* All-read message */}
        {allRead && (
          <p className="mt-5 text-center text-sm text-white/60">
            All stories in this category were read tonight 🌙
          </p>
        )}

        {/* Story card */}
        {currentStory && (
          <div ref={storyRef}>
            <StoryCard key={currentStory.id} story={currentStory} />
          </div>
        )}

        {/* Another story button */}
        {currentStory && (
          <button
            onClick={pickStory}
            className="mt-4 w-full rounded-xl py-2.5 text-sm font-medium text-white/80 bg-white/10 hover:bg-white/20 hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            Another story
          </button>
        )}
      </div>
    </div>
  )
}
