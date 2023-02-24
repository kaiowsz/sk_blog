import React from 'react'
import { Header } from "./"

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