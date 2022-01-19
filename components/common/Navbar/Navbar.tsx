

import { FC } from "react"
import { Container } from "@components/ui"
import Link from "next/link"
import s from "./Navbar.module.css"
import { Usernav } from "@components/common"

const Navbar: FC = () => {
  return (
    <Container>
      <div className={s.root}>
        <div className="flex flex-1 items-center">
          <Link href="/">
            <a className={s.logo}>
              Exotic Pigion
            </a>
          </Link>
          <nav className="ml-6 space-x-6">
            <Link href="/">
              <a className={s.link}>All</a>
            </Link>
            <Link href="products/mona-lisa-leonardo-da-vinci">
              <a className={s.link}>MONA LISA</a>
            </Link>
            <Link href="/products/the-scream-edvard-munch">
              <a className={s.link}>THE SCREAM</a>
            </Link>
            <Link href="/products/guernica-pablo-picasso">
              <a className={s.link}>GUERNICA</a>
            </Link>
          </nav>
          <div className="flex flex-1 justify-end space-x-8">
            <Usernav />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Navbar
