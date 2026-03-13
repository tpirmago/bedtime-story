import { CATEGORIES } from '../data/stories'

type Props = {
  selected: string | null
  onSelect: (category: string | null) => void
}

export default function CategorySelector({ selected, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-5">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(selected === cat ? null : cat)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition cursor-pointer
            ${selected === cat
              ? 'bg-[#291b4a] hover:bg-[#481b74] text-white'
              : 'bg-white/10 text-white/80 hover:bg-white/20'
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
