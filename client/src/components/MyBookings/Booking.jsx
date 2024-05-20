import { Link } from "react-router-dom";
import { useUserContext } from "../../UserContext";
import styles from "./Booking.module.css";

function Booking({ booking, handleStatusUpdate }) {
  const { API_URL } = useUserContext();
  const { _id: bookingId, place, booker, createdAt } = booking;
  let bookingStatus = booking.status === "accepted" ? "accepted" : "pending";

  return (
    <div className={styles.booking}>
      <div
        style={{
          backgroundImage: `url(${API_URL}/images/${
            place.photos[0] || "uploads/default.jpg"
          })`,
        }}
        className={styles.picture}
      >
        <div className={styles.pictureOverlay}></div>
      </div>
      <div className={styles.detailContainer}>
        <div>
          <h3 className={styles.about}>
            {booker.name.split(" ")[0]} booked
            <Link to={`/places/${place?.slug}`}>
              <b> {place.title}</b>
            </Link>
          </h3>
          <span className={`${styles[bookingStatus]} ${styles.status}`}>
            {bookingStatus}
          </span>
        </div>
        <div className={styles.ctaContainer}>
          <div>Booked on {new Date(createdAt).toDateString()}</div>
          <div>
            {bookingStatus !== "accepted" ? (
              <>
                <button
                  onClick={() =>
                    handleStatusUpdate({ status: "decline", bookingId })
                  }
                  className={`${styles.cta} ${styles.ctaPending}`}
                >
                  Decline
                </button>
                <button
                  onClick={() =>
                    handleStatusUpdate({ status: "accepted", bookingId })
                  }
                  className={styles.cta}
                >
                  Accept
                </button>
              </>
            ) : (
              <button
                onClick={() =>
                  handleStatusUpdate({ status: "delete", bookingId })
                }
                className={`${styles.cta} ${styles.ctaDelete}`}
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
