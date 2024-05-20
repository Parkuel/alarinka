import { useEffect, useState } from "react";
import { useUserContext } from "../../UserContext";
import styles from "./MyListings.module.css";
import Listing from "./Listing";
import { socket } from "../../socket";

function MyListings() {
  const { API_URL, user } = useUserContext();
  const [myListings, setMyListings] = useState([]);

  useEffect(() => {
    async function fetchListings() {
      const res = await fetch(`${API_URL}/place/mine/${user._id}`);
      const { places: listings } = await res.json();
      setMyListings(listings);
    }
    fetchListings();
  }, []);

  useEffect(() => {
    function removePlace(deletedPlace) {
      if (!deletedPlace?._id) return;
      setMyListings((listings) =>
        listings.filter((place) => place._id !== deletedPlace._id)
      );
    }

    socket.on("deleted my place", removePlace);
    return () => {
      socket.off("deleted my place", removePlace);
    };
  }, []);

  function handleDeletePlace(placeData) {
    const isOwner = placeData.owner === user._id;
    if (!isOwner)
      return alert("Unauthorizes. Only the owner of this place can delete it.");
    const approves = confirm(
      `Are you sure you want to delete ${placeData?.title.toUpperCase()}?`
    );
    if (!approves) return;
    socket.emit("delete place", placeData);
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        <span>My Listings</span>
      </h1>
      {myListings.length ? (
        <div className={styles.listContainer}>
          {myListings.map((listing, i) => (
            <Listing
              listing={listing}
              handleDeletePlace={handleDeletePlace}
              key={i}
            />
          ))}
        </div>
      ) : (
        <h1 className={styles.title}>
          <span>No listing found. Use the Add button to create.</span>
        </h1>
      )}
    </section>
  );
}

export default MyListings;
