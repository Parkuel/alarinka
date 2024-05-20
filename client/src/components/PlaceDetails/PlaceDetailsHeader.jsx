import { useUserContext } from "../../UserContext";
import { useTimeManager } from "../../hooks/useTimeManager";
import CtaBtn from "../CtaBtn/CtaBtn";
import Icons from "../Icons/Icons";
import styles from "./PlaceDetailsHeader.module.css";

function PlaceDetailsHeader({
  title,
  address,
  mainImg,
  checkIn,
  checkOut,
  owner,
  price,
  handleBookPlace,
}) {
  const { API_URL } = useUserContext();
  const checkInTime = useTimeManager({ type: "numberToTime", value: checkIn });
  const checkOutTime = useTimeManager({
    type: "numberToTime",
    value: checkOut,
  });

  return (
    <section className={styles.header}>
      <div className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <img
          src={`${API_URL}/images/${mainImg || "uploads/default.jpg"}`}
          alt={title}
          className={styles.heroImg}
        />
      </div>
      <div className={styles.box}>
        <h1 className={styles.title}>
          <span>{title}</span>
        </h1>
        <div className={styles.details}>
          <div className={styles.detailItem}>
            <Icons type={"location"} iconClasses={styles.detailItemIcon} />
            <span>{address}</span>
          </div>
          <div className={styles.detailItem}>
            <Icons type={"time"} iconClasses={styles.detailItemIcon} />
            <span>
              {checkInTime} - {checkOutTime}
            </span>
          </div>
        </div>
        <div className={styles.ctaContainer}>
          <div className={styles.price}>${price}</div>
          <CtaBtn onClick={() => handleBookPlace()}>Book Now!</CtaBtn>
        </div>
      </div>
    </section>
  );
}

export default PlaceDetailsHeader;
