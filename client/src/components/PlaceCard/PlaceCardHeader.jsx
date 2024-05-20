import { useUserContext } from "../../UserContext";
import styles from "./PlaceCardHeader.module.css";

function PlaceCardHeader({ mainImg, title }) {
  const { API_URL } = useUserContext();

  return (
    <div className={styles.header}>
      <div className={styles.picture}>
        <div className={styles.pictureOverlay}></div>
        <img
          src={`${API_URL}/images/${mainImg || "uploads/default.jpg"}`}
          alt={title}
          className={styles.pictureImg}
        />
      </div>
      <h3 className={styles.title}>
        <span>{title}</span>
      </h3>
    </div>
  );
}

export default PlaceCardHeader;
