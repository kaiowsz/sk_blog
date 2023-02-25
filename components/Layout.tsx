import React from 'react'
import { Header } from "./"
import { FeaturedCardPosts } from './'

interface Props {
    children: string | JSX.Element | JSX.Element[] | (() => JSX.Element)
}

const Layout = ({children}: Props) => {
  return (
    <>
    <Header />
    {children}
    </>
  )
}

export default Layout