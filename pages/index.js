import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Programs from '../components/Programs'
import VideoSection from '../components/VideoSection'
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
        <VideoSection />
      </main>
      <Footer />
    </>
  )
}
