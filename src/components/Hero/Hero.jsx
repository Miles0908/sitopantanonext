import styles from "./Hero.module.scss";
import { AnimatePresence, motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className={styles.Hero}>
      <img
        className={styles.HeroImg}
        src="SiparioRosso.jpeg"
        alt="Immaginetenda"
      />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: -1000, y: -550 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 2 }}
        >
          <img
            className={styles.HeroLeftImg}
            src="HeroImg.jpg"
            alt="PantanoImg"
          />
        </motion.div>
      </AnimatePresence>
      <div className={styles.HeroParagraph}>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: 1000}}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 2 }}
          >
            <p>
              <b>Emanuele Pantano:</b> il comico che ti fa ridere con la verità.
              Scopri i suoi spettacoli, i suoi documentari e le sue storie
              irriverenti.
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
export default Hero;
