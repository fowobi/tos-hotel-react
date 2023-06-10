import React, { useState } from "react";
import moment from "moment";

const SearchResults = ({ bookings }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const toggleRowSelection = (id) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(id)) {
        return prevSelectedRows.filter((rowId) => rowId !== id);
      } else {
        return [...prevSelectedRows, id];
      }
    });
  };

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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;

