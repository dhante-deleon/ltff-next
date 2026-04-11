import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Programs from '../components/Programs'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Learning Through Food Foundation</title>
        <meta name="description" content="Nutrition, education and community programs" />
      </Head>
      <Header />
      <main>
        <Hero />
        <Programs />
      </main>
      <Footer />
    </>
  )
}
