import PageLayout from '../components/PageLayout'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home({ articles }) {
  return (
    <PageLayout title='Next 12 - Home'>
      <div className={styles.container}>
        {articles.length === 0 && <p>There are not articles...</p>}
        {articles.length > 0 && articles.map((article, index) => (
          <div key={article.title}>
            <Image
              src={article.urlToImage}
              alt={`Image of the article ${article.title}`}
              width={450}
              height={300}
              // These two properties are for responsive
              sizes='100vw'
              style={{ width: '100%', height: 'auto' }}
              quality={50}
              priority={index < 2}
            />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
// With getServerSideProps -> to N request, this excuted N times. Use this when the page has a lot of dynamic data or MUCH live data
// export async function getServerSideProps () {
//   const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=eb2b802370794172bc11d1933d6d8f00')
//   const { articles } = await response.json()
//   return {
//     props: {
//       articles
//     }
//   }
// }

// With getStaticProps -> to N request, this executed 1 time at build time (or when I refresh the page)
export async function getStaticProps () {
  const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=eb2b802370794172bc11d1933d6d8f00')
  const { articles } = await response.json()
  return {
    props: {
      articles
    }
  }
}
