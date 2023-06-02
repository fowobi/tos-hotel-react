import React from "react";
import moment from "moment";

const SearchResults = () => {
  const bookings = [
    {
      id: 1,
      title: "Mr",
      firstName: "John",
      surname: "Doe",
      email: "johndoe@example.com",
      roomId: 101,
      checkInDate: "2023-06-01",
      checkOutDate: "2023-06-05",
    },
    {
      id: 2,
      title: "Mrs",
      firstName: "Jane",
      surname: "Smith",
      email: "janesmith@example.com",
      roomId: 202,
      checkInDate: "2023-06-03",
      checkOutDate: "2023-06-08",
    },
    
  ];

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
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.title}</td>
                <td>{booking.firstName}</td>
                <td>{booking.surname}</td>
                <td>{booking.email}</td>
                <td>{booking.roomId}</td>
                <td>{booking.checkInDate}</td>
                <td>{booking.checkOutDate}</td>
                <td>{nights}</td> {/* New column */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
