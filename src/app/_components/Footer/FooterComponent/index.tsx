'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Footer, Media } from '../../../../payload/payload-types'
import { inclusions, noHeaderFooterUrls, profileNavItems } from '../../../constants'
import { Button } from '../../Button'
import { Gutter } from '../../Gutter'

import classes from './index.module.scss'

const FooterComponent = ({ footer }: { footer: Footer }) => {
  const pathname = usePathname()
  const navItems = footer?.navItems || []

  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      <Gutter>
        <ul className={classes.inclusions}>
          {inclusions.map(inclusion => (
            <li key={inclusion.title}>
              <Image
                src={inclusion.icon}
                alt={inclusion.title}
                width={36}
                height={36}
                className={classes.icon}
              />

              <h5 className={classes.title}>{inclusion.title}</h5>
              <p>{inclusion.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>

      <div className={classes.footer}>
        <Gutter>
          <div className={classes.wrap}>
            <Link href="/">
              <Image src="/logo-white.svg" alt="logo" width={170} height={50} />
            </Link>

            <p>
              {footer.copyright}{' '}
              {/*we added a copyright manual from payload/globals/footer  and also included the copyright from the payload-types under footer interface and also under graphql.globals*/}
            </p>

            <div className={classes.socilaLinks}>
              {
                navItems.map((item) => {
                  const icon = item?.link?.icon as Media //we added the icon by modifying the _graphql/link by adding the icons object and url as a property
                  //and then after that we modified the payload/fields/links under  linkResult.fields , where we specify that our fields should have what properties

                  return(
                    <Button
                    key={item.link.label}
                     el = "link"
                     href = {item.link.url}
                     newTab = {true}
                     className={classes.socilaLinkItem}
                    >
                      <Image src = {icon?.url} alt = {item.link.label} width ={24} height={24} className={classes.socialIcon} />

                    </Button>
                  )
                })
              }
            </div>
            
          </div>
        </Gutter>
      </div>
    </footer>
  )
}

export default FooterComponent
