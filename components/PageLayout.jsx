import Head from 'next/head'
import Link from 'next/link'

const PageLayout = ({ children, title = 'Next 12 - App' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="name" content="Byron J Calvete"/>
        <meta name="description" content="This app is for fun with Next.js 12" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div>This is a header of all my app 😅</div>
        <div>
          <Link href='/'>Home</Link>
        </div>
        <div>
          <Link href='/about'>About</Link>
        </div>
      </header>
      <main>
        {children}
      </main>
      <style jsx>
        {`
          header {
            display: flex;
            justify-content: space-between;
            padding: 2rem;
          }
        `}
      </style>
    </>
  )
}

export default PageLayout
