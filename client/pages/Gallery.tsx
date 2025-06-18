import PageTitle from '@/components/PageTitle'
import Card from '../components/Card'
import { Meowtivation } from '@models/meowtivation'
import { useEffect, useState } from 'react'
import { getAllMeowtivations } from '@/apis/meowtivations'

export default function Gallery() {
  const [meowtivations, setMeowtivations] = useState<Meowtivation[]>([])
  const [sort, setSort] = useState<'recent' | 'popular' | 'random'>('recent')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const data = await getAllMeowtivations(sort)
        setMeowtivations(data)
      } catch (err) {
        console.error('Failed to fetch meowtivations:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [sort])

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value as 'recent' | 'popular' | 'random')
  }

  return (
    <div>
      <PageTitle title="Meowtivation Gallery" />

      <div className="text-center p-8">
        <select
          value={sort}
          onChange={handleSortChange}
          className="mb-6 p-2 rounded border shadow"
        >
          <option value="recent">Recent</option>
          <option value="popular">Popular</option>
          <option value="random">Random</option>
        </select>
        {/* Gallery Grid */}
        {loading ? (
          <p>Loading...</p>
        ) : !meowtivations || meowtivations.length === 0 ? (
          <p className="col-span-full text-gray-500">No meowtivations yet.</p>
        ) : (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {meowtivations.map((m) => (
              <Card
                key={m.id ?? `${m.userId}-${m.createdAt}`}
                meowtivation={m}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
