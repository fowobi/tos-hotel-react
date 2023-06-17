import React, { useState,useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults.js";
// import fakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
   const [bookings, setBookings] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);

     useEffect(() => {
       //  console.log("Page first renders on the screen.");
       setIsLoading(true); 

       fetch("https://cyf-react.glitch.me/delayed")
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
        {isLoading ? (
          <p>Loading data... Please wait.</p>
        ) : error ? (
          <p>Error: {error.message}</p> 
        ) : (
        <SearchResults bookings={bookings}/>
        )}
      </div>
    </div>
  );
};

export default Bookings;
