import Link from 'next/link'
import PageLayout from '../components/PageLayout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <PageLayout title='Next 12 - Home'>
      <div className={styles.container}>
        <h1>Hi, I&apos;m Byron 👋🏼</h1>
        <Link href='/about'>Go to about</Link>
      </div>
    </PageLayout>
  )
}
