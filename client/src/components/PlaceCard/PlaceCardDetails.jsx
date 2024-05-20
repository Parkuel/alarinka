import { useTimeManager } from "../../hooks/useTimeManager";
import AssignPerks from "../AssignPerks/AssignPerks";
import Icons from "../Icons/Icons";
import styles from "./PlaceCardDetails.module.css";

function PlaceCardDetails({ description, address, checkIn, checkOut, perks }) {
  const checkInTime = useTimeManager({ type: "numberToTime", value: checkIn });
  const checkOutTime = useTimeManager({
    type: "numberToTime",
    value: checkOut,
  });

  return (
    <div className={styles.details}>
      <div className={styles.description} title={description}>
        {description}
      </div>
      <div className={styles.placeData}>
        <span>{address}</span>
      </div>
      <div className={styles.placeData}>
        <span>
          {checkInTime} - {checkOutTime}
        </span>
      </div>
      <div className={styles.perks}>{<AssignPerks perks={perks} />}</div>
    </div>
  );
}

function Perks({ perks }) {
  return <div></div>;
}

export default PlaceCardDetails;
