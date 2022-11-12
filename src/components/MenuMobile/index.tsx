import Image from "next/image";
import Link from "next/link";
import { Dispatch } from "react";

import styles from "./styles.module.css";

type MenuMobileProps = {
  isActiveMenu: boolean;
  closedMenuMobile: Dispatch<boolean>;
};

export function MenuMobile({ isActiveMenu, closedMenuMobile }: MenuMobileProps) {
  return (
    <>
      <div
        className={`${styles.menu_mobile} ${
          isActiveMenu ? styles.active_menu : ""
        }`}
      >
         <div className={styles.btn_closed} onClick={() => closedMenuMobile(false)}>
          <i className="bi bi-x-circle"></i>
        </div>
        <nav
          className={`${styles.navbar_mobile} ${
            isActiveMenu ? styles.active_navbar : ""
          }`}
        >
          <Link href={"/"}>
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
            <li onClick={() => closedMenuMobile(false) }>
              <Link href={"/"}>
                <a>Home</a>
              </Link>
            </li>
            <li onClick={() => closedMenuMobile(false) }>
              <Link href={"/about"}>
                <a>Sobre</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
