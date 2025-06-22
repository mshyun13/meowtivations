import PageTitle from '@/components/PageTitle'
import catLogo from '/images/cat-logo.png'

// This is the starter Home page component
// This will be fully implemented by Bryn and Callum
function Home() {
  return (
    <>
      <PageTitle title="Meowtivation Home" />
      <div className="container mx-auto p-4">
        <div className="text-center my-10">
          <img
            src={catLogo}
            alt="Meowtivation Logo"
            className="mx-auto w-32 h-32 animate-bounce"
          />
          <h1 className="text-4xl font-extrabold mb-4 text-primary tracking-wide">
            Welcome to Meowtivation!
          </h1>
          <p className="text-gray-600 text-lg">
            Discover and connect with amazing meowtivations from around the
            community.
          </p>
        </div>
      </div>
    </>
  )
}

export default Home
