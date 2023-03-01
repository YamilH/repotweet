import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero.jsx'
import Slider from '../components/Slider.jsx'
import { SliderData } from '../components/SliderData.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>RepoTweet</title>
        <meta charset="UTF-8" />
        <meta name="language" content="english" />
        <meta name="copyright" content="YamilH" />
        <meta name="author" content="Yamil Hamui" />
        <meta name="audience" content="all" />
        <meta name="keywords" content="photography, twitter, portfolio" />
        <meta name="robots" content="index, all, follow" />
        <meta name="description" content="This is a Repository for Twitter Images, a RepoTweet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>

      <Hero 
        heading='RepoTweet'
        message='This is a Repository for Twitter Images, a RepoTweet' 
        />

      <Slider slides={SliderData}/>
    </div>
  )
}
