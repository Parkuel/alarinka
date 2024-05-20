import AssignPerks from "../AssignPerks/AssignPerks";
import CtaBtn from "../CtaBtn/CtaBtn";
import Icons from "../Icons/Icons";
import styles from "./PlaceDetailsDescription.module.css";

function PlaceDetailsDescription({
  title,
  description,
  extraInfo,
  perks,
  owner,
  price,
  handleBookPlace,
}) {
  return (
    <section className={styles.container}>
      <div>
        <h2 className={styles.topic}>About {title}.</h2>
        <p className={styles.descriptionText}>{description}</p>
        <h2 className={`${styles.topic} ${styles.topicSmall}`}>
          Rules and Extra information
        </h2>
        <p className={styles.descriptionText}>{extraInfo}</p>
      </div>
      <div className={styles.overview}>
        <div className={styles.overviewGroup}>
          <div className={styles.ctaContainer}>
            <div className={styles.price}>${price}</div>
            <CtaBtn type="green" onClick={() => handleBookPlace()}>
              Book Now!
            </CtaBtn>
          </div>
        </div>
        <div className={styles.overviewGroup}>
          <h2 className={`${styles.topic} ${styles.topicMedium}`}>Owner</h2>
          <div className={styles.overviewDetail}>
            {<Icons type="person" />}
            <span className="">{owner.name}</span>
          </div>
          <div className={styles.overviewDetail}>
            {<Icons type="mail" />}
            <span className="">{owner.email}</span>
          </div>
        </div>
        <div className={styles.overviewGroup}>
          <h2 className={`${styles.topic} ${styles.topicMedium}`}>Perks</h2>
          <div className={styles.overviewDetail}>
            {<AssignPerks perks={perks} iconClass={styles.perkIcon} />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlaceDetailsDescription;
