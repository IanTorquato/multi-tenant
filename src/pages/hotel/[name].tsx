import { GetStaticPaths, GetStaticProps } from 'next'

interface HotelProps {
  name: string
  image?: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const delay = ms => new Promise(resolve => setTimeout(() => resolve(2), ms))

  await delay(5000)

  return {
    paths: [
      { params: { name: 'internacional' } },
      { params: { name: 'castelo' } }
    ],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { name } = context.params

  return {
    props: { name }
  }
}

const Hotel: React.FC<HotelProps> = ({ name }) => {
  return (
    <div>
      <h1>Hotel {name}</h1>
    </div>
  )
}

export default Hotel