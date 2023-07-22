import Preloader from "../Preloader";
import styles from "./DefaultLayout.module.scss";
import Link from "next/link";

const DefaultLayout = ({ children }) => {
  return (
    <div className={styles.DefaultLayout}>
      <Preloader>
      <div className={styles.NavbarLayout}>
        <img
          className={styles.LayoutImg}
          src="LogoImg2-remove.png"
          alt="logoImg"
        />
        <Link href="/">Home</Link>
        <Link href="/shows">Shows</Link>
      </div>
      {children}
      <div className={styles.LayoutFooter}>
        <p>Copyright by Emanuele Pantano @ 2023</p>
      </div>
      </Preloader>
    </div>
  );
};

export default DefaultLayout;
