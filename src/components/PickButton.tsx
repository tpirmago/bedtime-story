type Props = {
  onClick: () => void
  disabled: boolean
  hasStory?: boolean
}

export default function PickButton({ onClick, disabled, hasStory }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-auto px-10 rounded-xl py-3 font-semibold text-white transition-all duration-300 cursor-pointer
        ${disabled
          ? 'bg-[#291b4a]/40 text-white/40 cursor-not-allowed'
          : 'bg-[#291b4a] hover:bg-[#481b74] hover:scale-[1.02]'
        }`}
    >
      {hasStory ? 'One more story' : 'Pick a story'}
    </button>
  )
}
