import Preloader from "../Preloader";
import styles from "./DefaultLayout.module.scss";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const DefaultLayout = ({ children }) => {
  return (
    <div className={styles.DefaultLayout}>
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
        <div className={styles.LayoutFooter}>
          <div className={styles.FooterLogo}>
            <img
              className={styles.LayoutImg}
              src="/LogoImg2-remove.png"
              alt="Logo"
            />
          </div>
          <div className={styles.FooterLinks}>
            <ul>
              <li>
                <a href="/bio">Chi sono</a>
              </li>

              <li>
                <a href="/spettacoli">Prossimi spettacoli</a>
              </li>
            </ul>
          </div>
          <div className={styles.FooterSocial}>
            <ul>
              <li>
                <a href="https://www.facebook.com/pantanoemanuele">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/pantanoemanuele/">
                  <FaInstagram />
                </a>
              </li>

              <li>
                <a href="https://www.youtube.com/@EmanuelePantanocomedy">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.FooterSubscribe}>
            <p>
              Iscriviti alla mia newsletter per ricevere le ultime novità e le
              mie battute!
            </p>
            <form>
              <input type="email" placeholder="Inserisci la tua email" />
              <button type="submit">Iscriviti</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
