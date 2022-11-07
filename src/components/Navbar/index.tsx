import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { MenuMobile } from "../MenuMobile";

import styles from "./styles.module.css";

export default function Navbar() {
  const [isActiveMenu, setToggleMenu] = useState<boolean>(false);
  const toggleMenuMobile = () => {
    if (isActiveMenu) {
      setToggleMenu(false);
    } else {
      setToggleMenu(true);
    }
  };

  return (
    <>
      <MenuMobile isActiveMenu={isActiveMenu}/>
      <nav className={styles.navbar}>
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
        <ul className={styles.link_items}>
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
        <div className={styles.hamburguer} onClick={toggleMenuMobile}>
          <i className="bi bi-list"></i>
        </div>
      </nav>
    </>
  );
}
