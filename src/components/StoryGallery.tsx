import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { stories } from '../data/stories'
import type { Story } from '../data/stories'

type Props = {
  open: boolean
  onClose: () => void
  onSelect: (story: Story) => void
  readIds: string[]
}

const CATEGORY_COLORS: Record<string, string> = {
  Animals:    'bg-green-500/30 text-green-200',
  Adventure:  'bg-orange-500/30 text-orange-200',
  Friendship: 'bg-pink-500/30 text-pink-200',
  Magic:      'bg-violet-500/30 text-violet-200',
  Space:      'bg-blue-500/30 text-blue-200',
  Dreams:     'bg-yellow-500/30 text-yellow-200',
}

export default function StoryGallery({ open, onClose, onSelect, readIds }: Props) {
  const [showRead, setShowRead] = useState(false)

  const displayed = showRead
    ? stories.filter(s => readIds.includes(s.id))
    : stories

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-3xl max-h-[85vh] bg-indigo-950/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowRead(false)}
                  className={`text-lg font-semibold transition-colors cursor-pointer ${!showRead ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
                >
                  All Stories
                </button>
                <button
                  onClick={() => setShowRead(true)}
                  className={`text-sm font-medium transition-colors cursor-pointer ${showRead ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
                >
                  Read ({readIds.length})
                </button>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Grid */}
            <div className="overflow-y-auto max-h-[calc(85vh-60px)] p-5">
              {displayed.length === 0 ? (
                <p className="text-center text-white/40 text-sm py-10">No stories read yet</p>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {displayed.map(story => (
                    <div
                      key={story.id}
                      onClick={() => { onSelect(story); onClose() }}
                      className="flex flex-col bg-white/8 hover:bg-white/12 border border-white/10 rounded-xl p-3.5 transition-colors cursor-pointer"
                    >
                      <span
                        className={`self-start text-[10px] font-medium px-2 py-0.5 rounded-full mb-2 ${CATEGORY_COLORS[story.category] ?? 'bg-white/20 text-white/70'}`}
                      >
                        {story.category}
                      </span>
                      <h3 className="text-sm font-semibold text-white leading-snug mb-1.5">
                        {story.title}
                      </h3>
                      <p className="text-xs text-white/50 leading-relaxed line-clamp-3">
                        {story.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
