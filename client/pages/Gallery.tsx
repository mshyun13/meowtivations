import PageTitle from '@/components/PageTitle'
import Card from '../components/Card'
import { Meowtivation } from '@models/meowtivation'
import { useState } from 'react'

export default function Gallery() {
  const [meowtivations, setMeowtivations] = useState<Meowtivation[]>([])
  const [sort, setSort] = (useState < 'recent') | 'popular' | 'random'('recent')
  const [loading, setLoading] = useState(false)

  // const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setMeowtivations([])
  // }

  return (
    <>
      <div>
        <PageTitle title="Meowtivation Gallery" />
        <div className="text-center p-8">
          {/* Gallery Grid */}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {meowtivations.length === 0 ? (
              <p>No meowtivations yet. </p>
            ) : (
              meowtivations.map((m) => <Card key={m.userId} meowtivation={m} />)
            )}
          </div>
        </div>
      </div>
    </>
  )
}
