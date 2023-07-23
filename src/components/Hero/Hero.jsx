import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <div className={styles.Hero}>
      <img className={styles.HeroImg} src="SiparioRosso.jpeg" alt="Immaginetenda" />
      <div >
        <img className={styles.HeroLeftImg} src="HeroImg.jpg" alt="PantanoImg" />
      </div>
      <div className={styles.HeroParagraph}>
        <p><b>Emanuele Pantano:</b> il comico che ti fa ridere con la verità. Scopri i suoi spettacoli, i suoi documentari e le sue storie irriverenti.</p>
      </div>
     
    </div>
  );
};
export default Hero;
