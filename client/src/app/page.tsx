import { Hero, SearchBar, CustomFilter } from '@/Components'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Hero />

      <div
        id='discover'
        className='mt-12 padding-x padding-y max-width'
      >
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>
            Car Caralogue
          </h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

      </div>
    </main>
  )
}
