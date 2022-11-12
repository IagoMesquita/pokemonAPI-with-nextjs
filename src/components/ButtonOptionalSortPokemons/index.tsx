import React, { useState } from "react";
import styles from "./ButtonOptionalSort.module.css";
export default function ButtonOptionalSortPokemons() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [orderBy, setOption] = useState<string>('Ordernar');
  const openAndClosedOptions = () => {
    if (isOpen) {
      return setOpen(false);
    } else {
      return setOpen(true);
    }
  };
  return (
    <>
      <div className={styles.container_sortOption}>
        <button className={styles.btn} onClick={openAndClosedOptions}>
          {orderBy}
        </button>
        {isOpen && (
          <ul className={ styles.container_option}>
            <li onClick={() => setOption('Pokemon Cre')}>Pokemon Cre</li>
            <li onClick={() => setOption('Alfabética Dec')}>Alfabética Dec</li>
            <li onClick={() => setOption('ID Cre')}>ID Cre</li>
            <li onClick={() => setOption('ID Dec')}>ID Dec</li>
          </ul>
        )}
      </div>
    </>
  );
}
