import styles from "./AssignPerks.module.css";
import Icons from "../Icons/Icons";

function AssignPerks({ perks, iconClass }) {
  const allPerks = ["wifi", "parking", "tv", "pets", "food", "entrance"];

  return (
    <>
      {allPerks.map((perk, i) => {
        return (
          <Icons
            type={perk}
            iconClasses={`${iconClass} ${
              styles[perks.includes(perk) ? "hasPerk" : "noPerk"]
            }`}
            key={i}
          />
        );
      })}
    </>
  );
}

export default AssignPerks;
