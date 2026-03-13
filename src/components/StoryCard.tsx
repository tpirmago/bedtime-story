import { motion } from 'framer-motion'
import type { Story } from '../data/stories'

type Props = {
  story: Story
}

export default function StoryCard({ story }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-6 bg-white/10 rounded-xl p-4"
    >
      {/* Text content */}
      <div className="flex flex-col min-w-0">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-lg font-semibold text-white leading-tight">{story.title}</h2>
          <span className="text-xs text-white/50 ml-3 whitespace-nowrap">{story.readingTime} min</span>
        </div>
        <p className="text-sm text-white/80 leading-relaxed whitespace-pre-line">{story.text}</p>
      </div>
    </motion.div>
  )
}
