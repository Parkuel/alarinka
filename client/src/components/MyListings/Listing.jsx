import { Link } from "react-router-dom";
import { useUserContext } from "../../UserContext";
import { useTimeManager } from "../../hooks/useTimeManager";
import styles from "./Listing.module.css";
import Icons from "../Icons/Icons";

function Listing({ listing, handleDeletePlace }) {
  const { API_URL } = useUserContext();
  const {
    title,
    createdAt,
    photos,
    maxGuests,
    price,
    checkIn,
    checkOut,
    slug,
    _id,
    owner,
  } = listing;
  const mainImg = photos[0];
  const checkInTime = useTimeManager({ type: "numberToTime", value: checkIn });
  const checkOutTime = useTimeManager({
    type: "numberToTime",
    value: checkOut,
  });

  return (
    <div className={styles.listing}>
      <div
        style={{
          backgroundImage: `url(${API_URL}/images/${
            mainImg || "uploads/default.jpg"
          })`,
        }}
        className={styles.picture}
      >
        <div className={styles.pictureOverlay}></div>
      </div>
      <div className={styles.detailContainer}>
        <div>
          <h3 className={styles.about}>
            <Link to={`/places/${slug}`}>
              <b>{title}</b>
            </Link>
          </h3>
          <div className={styles.aboutDetails}>
            <span>price: ${price}</span>
            <span>max guests: {maxGuests}</span>
          </div>
        </div>
        <div className={styles.details}>
          <div>
            {checkInTime} - {checkOutTime}
          </div>
          <div>Created on {new Date(createdAt).toDateString()}</div>
        </div>
      </div>

      <button
        className={styles.delBtn}
        onClick={() => handleDeletePlace({ _id, title, owner })}
      >
        <Icons type="bin" iconClasses={styles.delBtnIcon} />
      </button>
    </div>
  );
}

export default Listing;
