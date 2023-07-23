import { useEffect, useState } from "react";
import styles from "./ShowsCard.module.scss";

const ShowsCard = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("https://api.npoint.io/6b4f4a77505be984f42b")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);
  return (
    <div className={styles.ShowsCard}>
      <div className={styles.Cards}>
        {card.map((show) => (
          <div className={styles.Card} key={show.id}>
            <img src={show.image}  className={styles.Img} alt={show.name} /> 
            <h1 className={styles.Title}>{show.name}</h1>
            <p className={styles.Paragraph}>{show.description}</p>
           <a href={show.link} className={styles.Link}>🚀</a>

          </div>
        ))}
      </div>
    </div>
  );
};
export default ShowsCard;

