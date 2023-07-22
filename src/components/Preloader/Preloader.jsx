import styles from "./Preloader.module.scss";
import { useState, useEffect } from "react";

const Preloader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={styles.Preloader}>
        <img className={styles.PreloaderGif} src="otherGif.gif" alt="gif" />
      </div>
    );
  }
  return children;
};
export default Preloader;
