import PageLayout from '../components/PageLayout'

const About = () => {
  return (
    <PageLayout title='Next 12 - About'>
      <div>
        <h1>This is an about page</h1>
      </div>
      <style jsx>
        {`
          div {
            padding: 0 2rem;
            display: grid;
            place-content: center;
            height: 100vh;
          }
        `}
      </style>
    </PageLayout>
  )
}

export default About
