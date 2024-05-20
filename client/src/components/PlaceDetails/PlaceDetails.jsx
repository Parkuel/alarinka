import { useNavigate, useParams } from "react-router-dom";
import styles from "./PlaceDetails.module.css";
import { useEffect, useState } from "react";
import { useUserContext } from "../../UserContext";
import PlaceDetailsHeader from "./PlaceDetailsHeader";
import PlaceDetailsDescription from "./PlaceDetailsDescription";
import PlaceDetailsImages from "./PlaceDetailsImages";
import { socket } from "../../socket";

function PlaceDetails() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { API_URL, user } = useUserContext();
  const [place, setPlace] = useState({ photos: [], perks: [], owner: {} });
  const {
    title,
    owner,
    address,
    photos,
    description,
    perks,
    extraInfo,
    checkIn,
    checkOut,
    maxGuests,
    price,
    _id: placeId,
  } = place;

  useEffect(() => {
    async function getPlace() {
      try {
        const res = await fetch(`${API_URL}/place/detail/${slug}`);
        const { place: placeData, status } = await res.json();
        if (status !== "success") throw new Error("Place Not Found");
        setPlace(placeData);
      } catch (err) {
        console.log(err);
        alert(err.message);
      }
    }

    getPlace();
  }, []);

  useEffect(() => {
    function handleBookingError(err) {
      alert(err.message);
    }
    function handlePlaceBooked(data) {
      alert(data.message);
    }

    socket.on("create booking error", handleBookingError);
    socket.on("place booked", handlePlaceBooked);

    return () => {
      socket.off("create booking error", handleBookingError);
      socket.off("place booked", handlePlaceBooked);
    };
  }, []);

  function handleBookPlace() {
    const bookerId = user?._id;
    if (!bookerId) {
      alert("Log in to book this place!.");
      navigate("/login");
      return;
    }
    socket.emit("create booking", {
      place,
      owner,
      user,
    });
  }

  return (
    <div>
      <PlaceDetailsHeader
        title={title}
        address={address}
        maxGuests={maxGuests}
        mainImg={photos[0]}
        checkIn={checkIn}
        checkOut={checkOut}
        owner={owner}
        price={price}
        handleBookPlace={handleBookPlace}
      />
      <PlaceDetailsDescription
        title={title}
        description={description}
        extraInfo={extraInfo}
        perks={perks}
        owner={owner}
        checkIn={checkIn}
        checkOut={checkOut}
        price={price}
        handleBookPlace={handleBookPlace}
      />
      <PlaceDetailsImages photos={photos} />
    </div>
  );
}

export default PlaceDetails;
