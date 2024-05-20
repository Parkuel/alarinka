import { useUserContext } from "../../UserContext";
import styles from "./PlaceDetailsImages.module.css";

function PlaceDetailsImages({ photos = [], title = "" }) {
  const { API_URL } = useUserContext();

  return (
    <section className={styles.container}>
      {photos.map((photo, i) => (
        <img src={`${API_URL}/images/${photo}`} alt={title} key={i} />
      ))}
    </section>
  );
}

export default PlaceDetailsImages;
