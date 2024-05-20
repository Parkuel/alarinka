import { Link } from "react-router-dom";
import styles from "./PlaceCardPrice.module.css";

function PlaceCardPrice({ price, maxGuests, slug }) {
  return (
    <div className={styles.price}>
      <p>
        <span className={styles.priceValue}>${price} </span>
        <span className={styles.priceText}>per person</span>
      </p>
      <p className={styles.guests}>
        <span className={styles.priceValue}>{maxGuests} </span>
        <span className={styles.priceText}>guest spaces Available.</span>
      </p>
      <Link to={`/places/${slug}`} className={styles.openDetails}>
        details
      </Link>
    </div>
  );
}

export default PlaceCardPrice;
