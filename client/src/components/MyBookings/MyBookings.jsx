import { useEffect, useState } from "react";
import Booking from "./Booking";
import styles from "./MyBookings.module.css";
import { useUserContext } from "../../UserContext";
import { socket } from "../../socket";

function MyBookings() {
  const {
    API_URL,
    user,
    notificationIsActive: { booking: bookingIsActive },
    setNotificationIsActive,
  } = useUserContext();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function getBookings() {
      const res = await fetch(`${API_URL}/booking/${user._id}`);
      const { bookings: allBookings } = await res.json();
      setBookings(allBookings);
    }
    getBookings();
  }, []);

  useEffect(() => {
    function activateNotification() {
      const userId = user._id;
      if (!userId || bookingIsActive) return;
      socket.emit("activate bookings notification", userId);
      setNotificationIsActive((notifications) => {
        return { ...notifications, booking: true };
      });
    }
    activateNotification();

    return () => {
      activateNotification();
    };
  }, []);

  useEffect(() => {
    function handleUpdate(newBooking) {
      const bookingId = newBooking?._id;
      if (!bookingId) return;
      setBookings((bookings) =>
        bookings.map((booking) =>
          booking._id !== bookingId ? booking : newBooking
        )
      );
    }

    function handleDelete(bookingId) {
      if (!bookingId) return;
      alert("deleted successfully");
      setBookings((bookings) =>
        bookings.filter((booking) => booking._id !== bookingId)
      );
    }

    function handleDecline(bookingId) {
      if (!bookingId) return;
      setBookings((bookings) =>
        bookings.filter((booking) => booking._id !== bookingId)
      );
    }

    function addNewBooking(newBooking) {
      setBookings((bookings) => {
        return [...bookings, newBooking];
      });
    }

    socket.on("updated booking", handleUpdate);
    socket.on("declined booking", handleDecline);
    socket.on("deleted booking", handleDelete);
    socket.on("my new booking", addNewBooking);
    return () => {
      socket.off("updated booking", handleUpdate);
      socket.off("declined booking", handleDecline);
      socket.off("deleted booking", handleDelete);
      socket.off("my new booking", addNewBooking);
    };
  }, []);

  function handleStatusUpdate(queryObj) {
    socket.emit("update status", queryObj);
  }

  return (
    <section>
      <h1 className={styles.title}>
        <span>Bookings</span>
      </h1>
      {bookings.length ? (
        <div className={styles.bookingContainer}>
          {bookings.map((booking, i) => (
            <Booking
              booking={booking}
              handleStatusUpdate={handleStatusUpdate}
              key={i}
            />
          ))}
        </div>
      ) : (
        <h1 className={styles.title}>
          <span>No Bookings Yet...</span>
        </h1>
      )}
    </section>
  );
}

export default MyBookings;
