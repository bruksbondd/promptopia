import Feed from '@/components/Feed'
import Provider from '@/components/Provider'

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='text-center'>Discover &Share</h1>
      <br />
      <span> AI-Pawer proms</span>
      <Feed />
      <Provider />
    </section>
  )
}

export default Home
