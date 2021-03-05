import Link from 'next/link'

const Home: React.FC = () => {
  return (
    <div>
      <h1>Hello Silbeck</h1>
      <div className="link">
        <Link href="/hotel/castelo">
          <a>Hotel Castelo</a>
        </Link>
      </div>

      <div className="link">
        <Link href="/hotel/internacional">
          <a>Hotel Internacional</a>
        </Link>
      </div>
    </div>
  )
}

export default Home