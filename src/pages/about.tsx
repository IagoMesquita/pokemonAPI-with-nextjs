import Image from "next/image";
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        mollitia nisi, odit quae illo et, harum possimus veritatis illum totam
        laborum atque est voluptas quibusdam perspiciatis reiciendis repellendus
        aspernatur laboriosam?
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="charizard"
      />
    </div>
  );
}
