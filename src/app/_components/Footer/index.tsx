import React from 'react'
import Link from 'next/link'

import { Footer } from '../../../payload/payload-types'
import { fetchFooter} from '../../_api/fetchGlobals'
import FooterComponent from './FooterComponent'

export async function Footer() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()//this is coming from the database
  } catch (error) {
  console.log(error)
  }

  const navItems = footer?.navItems || []

  return (
   
   <>
   <FooterComponent footer = {footer}/>
   </>
    )
}
