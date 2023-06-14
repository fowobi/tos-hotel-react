import React, { useState,useEffect } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ bookings }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [customerProfile, setCustomerProfile] = useState(null);


  const toggleRowSelection = (id) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(id)) {
        return prevSelectedRows.filter((rowId) => rowId !== id);
      } else {
        return [...prevSelectedRows, id];
      }
    });
  };
     const showCustomerProfile = (id) => {
       setSelectedCustomerId(id);
     };

     useEffect(() => {
       if (selectedCustomerId) {
         fetch(`https://cyf-react.glitch.me/customers/${selectedCustomerId}`)
           .then((response) => response.json())
           .then((data) => setCustomerProfile(data))
           .catch((error) =>
             console.error("Error fetching customer profile:", error)
           );
       }
     }, [selectedCustomerId]);


  return (
    <div className="search-results">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room ID</th>
            <th>Check-In Date</th>
            <th>Check-Out Date</th>
            <th>Nights</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => {
            const checkInDate = moment(booking.checkInDate);
            const checkOutDate = moment(booking.checkOutDate);
            const nights = checkOutDate.diff(checkInDate, "days");

            return (
              <tr
                key={booking.id}
                onClick={() => toggleRowSelection(booking.id)}
                className={selectedRows.includes(booking.id) ? "selected" : ""}
              >
                <td>{booking.id}</td>
                <td>{booking.title}</td>
                <td>{booking.firstName}</td>
                <td>{booking.surname}</td>
                <td>{booking.email}</td>
                <td>{booking.roomId}</td>
                <td>{booking.checkInDate}</td>
                <td>{booking.checkOutDate}</td>
                <td>{nights}</td>
                
                <td>
                  <button onClick={() => showCustomerProfile(booking.id)}>
                    Show profile
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {selectedCustomerId && <CustomerProfile profile={customerProfile} />}
    </div>
  );
};

export default SearchResults;

