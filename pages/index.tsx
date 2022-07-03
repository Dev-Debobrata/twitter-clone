import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import Feed from '../components/feed/Feed'
import Sidebar from '../components/sidebar/Sidebar'
import Widgets from '../components/widgets/Widgets'
import { Tweet } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'

interface props {
  tweets: Tweet[]
}

const Home = ({ tweets }: props) => {
  return (
    <div className="lg:max-w-6xl max-h-screen overflow-hidden mx-auto">
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />

      <main className='grid grid-cols-9'>
        <Sidebar />
        <Feed tweets={tweets} />
        <Widgets />
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();
  
  return {
    props: {
      tweets,
    },
  }
}
