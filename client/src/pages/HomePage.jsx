import { socket } from "../socket";
import styles from "./HomePage.module.css";
import PlaceCard from "../components/PlaceCard/PlaceCard";
import { useEffect, useState } from "react";
import { useUserContext } from "../UserContext";

const HomePage = () => {
  const { API_URL } = useUserContext();
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    async function getPlaces() {
      const res = await fetch(`${API_URL}/place`);
      const { places: allPlaces } = await res.json();
      setPlaces(allPlaces);
    }
    getPlaces();
  }, []);

  useEffect(() => {
    function updatePlaces(newPlace) {
      setPlaces((places) => [newPlace, ...places]);
    }
    function removePlace(deletedPlace) {
      if (!deletedPlace?._id) return;
      setPlaces((places) =>
        places.filter((place) => place._id !== deletedPlace._id)
      );
    }

    socket.on("new update", updatePlaces);
    socket.on("new place delete", removePlace);

    return () => {
      socket.off("new update", updatePlaces);
      socket.off("new place delete", removePlace);
    };
  }, []);

  return (
    <>
      <h1 className={styles.title}>
        <span>Available around you</span>
      </h1>
      <div className={styles.cardsContainer}>
        {places.map((place) => {
          return <PlaceCard place={place} key={place._id} />;
        })}
      </div>
    </>
  );
};

export default HomePage;
