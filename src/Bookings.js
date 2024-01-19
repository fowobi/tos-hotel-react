import React, { useState, useEffect } from "react";
import moment from "moment";
import CustomerProfile from "./components/CustomerProfile";
import NewBookingForm from "./components/NewBookingForm";
import SearchResults from "./components/SearchResults";
import Search from "./Search";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    // fetch("https://cyf-react.glitch.me/delayed")
    fetch("https://tosin-hotel-server.glitch.me/delayed")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setBookings(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const search = (searchVal) => {
    // fetch(`https://cyf-react.glitch.me/delayed?search=${searchVal}`)
    fetch(`https://tosin-hotel-server.glitch.me/delayed?search=${searchVal}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        // setBookings(data);
        const filteredBookings = bookings.filter(
          (booking) =>
            booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
            booking.surname.toLowerCase().includes(searchVal.toLowerCase())
        );
        setBookings(filteredBookings);
      })

      .catch((error) => {
        console.error("Error fetching search results:", error);
        setError(error);
      });
  };

  const handleAddBooking = (newBooking) => {
    const newBookingWithId = {
      ...newBooking,
      id: bookings.length + 1,
    };
    setBookings((prevBookings) => [...prevBookings, newBookingWithId]);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {isLoading ? (
          <p>Loading data... Please wait.</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <>
            <SearchResults bookings={bookings} />
            <NewBookingForm handleAddBooking={handleAddBooking} />
          </>
        )}
      </div>
    </div>
  );
};

export default Bookings;

