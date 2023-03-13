import Head from 'next/head'

const PageLayout = ({ children, title = 'Next 12 - App' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="name" content="Byron J Calvete"/>
        <meta name="description" content="This app is for fun with Next.js 12" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>This is a header of all my app 😅</header>
      <main>
        {children}
      </main>
      <style jsx>
        {`
          header {
            padding: 2rem;
          }
        `}
      </style>
    </>
  )
}

export default PageLayout
