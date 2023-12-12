"use client"
import { Header } from 'next/dist/lib/load-custom-routes'
import React from 'react'
import { Gutter } from '../../Gutter'
import Link from 'next/link'
import Image from 'next/image'
import classes from "./index.module.scss"

import { HeaderNav } from '../Nav'
import { noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'

function HeaderComponent({header}:{header : Header | null}) {

  const pathname = usePathname()

  return (
    <nav className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide].filter(Boolean).join(" ")}>{/*we hide the header when we routes to the noHeaderFooterUrls*/}
        <Gutter className = {classes.wrap}>
            <Link href = "/">
                <img src = "/logo-black.svg" alt = "logo" width = {170} height = {70}/>
            </Link>

            <HeaderNav header = {header} />
     
        </Gutter>
    </nav>
  )
}

export default HeaderComponent
