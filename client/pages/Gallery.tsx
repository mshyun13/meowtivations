import PageTitle from '@/components/PageTitle'
import Card from '../components/Card'
import { Meowtivation } from '@models/meowtivation'
import { useEffect, useState } from 'react'
import { getAllMeowtivations } from '@/apis/meowtivations'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Gallery() {
  const [meowtivations, setMeowtivations] = useState<Meowtivation[]>([])
  const [sort, setSort] = useState<'recentSort' | 'popularSort' | 'randomSort'>(
    'recentSortSort',
  )
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

  // const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSort(e.target.value as 'recentSort' | 'popularSort' | 'randomSort')
  // }

  return (
    <div>
      <PageTitle title="Meowtivation Gallery" />

      <div className="text-center p-8">
        <div className="flex items-center pb-4 mb-4 justify-center space-x-4">
          <span>Order by:</span>
          <Tabs
            value={sort}
            onValueChange={(value: string) =>
              setSort(value as 'recentSort' | 'popularSort' | 'randomSort')
            }
          >
            <TabsList>
              <TabsTrigger
                value="recentSort"
                className="[&[data-state=active]]:text-primary [&[data-state=active]]:border-primary"
              >
                Recent
              </TabsTrigger>
              <TabsTrigger
                value="popularSort"
                className="[&[data-state=active]]:text-primary [&[data-state=active]]:border-primary"
              >
                Popular
              </TabsTrigger>
              <TabsTrigger
                value="randomSort"
                className="[&[data-state=active]]:text-primary [&[data-state=active]]:border-primary"
              >
                Random
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        {/* Gallery Grid */}
        {loading ? (
          <p>Loading...</p>
        ) : !meowtivations || meowtivations.length === 0 ? (
          <p className="col-span-full text-gray-500">No meowtivations yet.</p>
        ) : (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {meowtivations.map((m) => (
              <Card key={m.id} meowtivation={m} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
