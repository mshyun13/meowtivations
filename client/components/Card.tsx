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
     className="bg-black text-white rounded-lg shadow-lg p-6 max-w-lg mx-auto w-full hover:shadow-xl transition duration-200 focus:outline-none text-center"
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
     <h3 className='text-3xl font-bold uppercase text-white mb-4 tracking-wide'>
      {meowtivation.title}
    </h3>
    <blockquote className='text-xl italic text-gray-300 mb-2'>
      {meowtivation.quoteText}
    </blockquote>
    <p className='text-sm text-gray-400 mt-2'>
    — {meowtivation.quoteAuthor}
    </p>
    </div>
    </button>
  )
}
