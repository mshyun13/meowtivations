import ImageUpload from '@/components/image upload/ImageUpload'
import PageTitle from '@/components/PageTitle'

const userId = 1

// This is a starter component for the Profile page
export default function Profile() {
  return (
    <>
      <div>
        <PageTitle title="My Profile" />
        <div className="text-center p-8">
          <p>This page will display a gallery of all my meowtivations.</p>

          <div className="translate-y-20">
            <ImageUpload
              selectedImage={undefined}
              setSelectedImage={undefined}
            />
          </div>
        </div>
      </div>
    </>
  )
}
