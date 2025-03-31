import PageTitle from '@/components/PageTitle'
import { MeowtivationData } from '@models/meowtivation.ts'

// Initial state based on database fields
const initialState: MeowtivationData = {
  imageUrl: '',
  quoteText: '',
  quoteAuthor: '',
  title: '',
  userId: '',
  isPublic: true,
}

export default function Create() {
  return (
    <>
      <div>
        <PageTitle title="Meowtivate" />
        <div className="text-center p-8">
          <p>This page will contain the form to add a new meowtivation.</p>
        </div>
      </div>
    </>
  )
}
