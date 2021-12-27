import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.home}>
      <div>
        <h1 className={styles.title}>
          Platform untuk kebutuhan data warga RT 07
        </h1>
        <p className={styles.subTitle}>#RT07MakinMudah</p>
      </div>
      <div className={styles.colIlustrasi}>
        <Image
          src="/Saly-12.png"
          width={620}
          height={620}
          className={styles.ilustrasi}
        ></Image>
      </div>
    </div>
  );
}
