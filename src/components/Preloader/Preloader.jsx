import styles from "./Preloader.module.scss";
import { useState, useEffect } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={styles.Preloader}>
        <img className={styles.PreloaderGif} src="curtainGif.gif" alt="gif" /> 
     

      </div>
    );
  }

};
export default Preloader;
