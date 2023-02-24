import type { AppProps } from 'next/app'
import { Layout } from '../components'
import React, { useState, useEffect } from "react"
import '../styles/globals.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Layout>
    <Head>
      <title>SK Blog</title>
      <meta name="description" content="The most modern blog about development in general. Created by kaiowsz." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
