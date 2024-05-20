import { createContext, useContext, useEffect, useState } from "react";
// import {data} from "autoprefixer";

export const UserContext = createContext({});

// eslint-disable-next-line react/prop-types
export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  const [notificationIsActive, setNotificationIsActive] = useState({
    booking: false,
  });
  const API_URL = "http://localhost:4000";

  useEffect(() => {
    async function getUser() {
      if (user) return;
      try {
        const res = await fetch(`${API_URL}/user`, {
          method: "GET",
          credentials: "include",
        });
        const { user } = await res.json();
        setUser(user);
      } catch (err) {
        console.error("Error fetching profile:", err.message);
      } finally {
        setReady(true);
      }
    }
    getUser();
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        ready,
        API_URL,
        notificationIsActive,
        setNotificationIsActive,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("CityContext was used outside the CityProvider.");
  return context;
}
