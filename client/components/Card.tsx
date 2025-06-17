import { Meowtivation } from '@models/meowtivation'

interface Props {
  meowtivation: Meowtivation
  onClick?: () => void
}

// Simple starter component for the Card
export default function Card({ meowtivation, onClick }: Props) {
  return (
    <button
     onClick={onClick}
     className="bg-black text-white rounded-lg shadow-lg p-6 w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto hover:shadow-2xl hover:scale-[1.02] transition duration-300 ease-in-out text-center"
     > 
    {/* image: white border + rounded corners */}
    <div className='rounded-lg bg-white p-1 inline-block'>
    <div className="overflow-hidden rounded-lg">
     <img 
      src={meowtivation.imageUrl} 
      alt="Meowtivational cat"
      className="w-full h-auto object-cover max-h-[400px]" />
    </div>
    </div>
    <div className='p-6 text-center'>
     <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-white mb-4 tracking-wide'>
      {meowtivation.title}
    </h3>
    <blockquote className='text-base sm:text-lg md:text-xl italic text-gray-300 mb-2'>
      {meowtivation.quoteText}
    </blockquote>
    <p className='text-sm text-gray-400 mt-2'>
    — {meowtivation.quoteAuthor}
    </p>
    </div>
    </button>
  )
}
