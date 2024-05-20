import styles from "./PlaceCard.module.css";
import PlaceCardDetails from "./PlaceCardDetails";
import PlaceCardHeader from "./PlaceCardHeader";
import PlaceCardPrice from "./PlaceCardPrice";

function PlaceCard({ place }) {
  const {
    title,
    address,
    photos,
    description,
    perks,
    checkIn,
    checkOut,
    maxGuests,
    price,
    slug,
  } = place;

  return (
    <div className={styles.card}>
      <PlaceCardHeader mainImg={photos[0]} title={title} />
      <PlaceCardDetails
        description={description}
        address={address}
        checkIn={checkIn}
        checkOut={checkOut}
        perks={perks}
      />
      <PlaceCardPrice
        price={price}
        maxGuests={maxGuests}
        title={title}
        slug={slug}
      />
    </div>
  );
}

export default PlaceCard;
