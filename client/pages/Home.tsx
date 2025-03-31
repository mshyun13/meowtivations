import PageTitle from '@/components/PageTitle'

// This is the starter Home page component
// This will be fully implemented by Bryn and Callum
function Home() {
  return (
    <>
      <PageTitle title="Meowtivation Home" />
      <div className="container mx-auto p-4">
        <div className="text-center my-8">
          <h2 className="text-2xl font-bold mb-4">Welcome to Meowtivation</h2>
          <p className="text-gray-600 mb-8">
            Discover and connect with amazing meowtivations from around the
            community.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4">Features to implement:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Display featured meowtivations on the homepage</li>
            <li>Add search and filtering functionality</li>
            <li>Implement meowtivation favoriting system</li>
            <li>Create browsing experience for meowtivation discovery</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Home
