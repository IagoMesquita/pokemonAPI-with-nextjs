import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.css";
 
type MenuMobileProps = {
  isActiveMenu: boolean;
}

export function MenuMobile({ isActiveMenu }: MenuMobileProps) {
  return (
    <>
      <div
        className={`${styles.menu_mobile} ${
          isActiveMenu ? styles.active_menu : ""
        }`}
      >
        <nav className={styles.navbar_mobile}>
          <Link href={"/"} >
            <a className={styles.logo}>
              <Image
                src="/images/pokeball.png"
                width="30"
                height="30"
                alt="pokebola"
              />
              <h1>PokeNext</h1>
            </a>
          </Link>
          <ul
            className={`${styles.link_items_mobile} ${
              isActiveMenu ? styles.active_menu : ""
            }`}
          >
            <li>
              <Link href={"/"}>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href={"/about"}>
                <a>Sobre</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
