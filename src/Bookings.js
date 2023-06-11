import React, { useState,useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults.js";
// import fakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
   const [bookings, setBookings] = useState([]);

     useEffect(() => {
     console.log("Page first renders on the screen.");

      fetch("https://cyf-react.glitch.me")
       .then((response) => response.json())
       .then((data) => setBookings(data));
    }, []);

    const search = (searchVal) => {
    // console.info("TO DO!", searchVal);
      const filteredBookings = bookings.filter(
       (booking) =>
         booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
         booking.surname.toLowerCase().includes(searchVal.toLowerCase())
     );
     setBookings(filteredBookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={bookings}/>
      </div>
    </div>
  );
};

export default Bookings;
