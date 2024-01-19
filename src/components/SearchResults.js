import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ bookings }) => {
  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "ascending",
  });

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedBookings = [...bookings].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const renderSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? "▲" : "▼";
    }
    return null;
  };

  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  const toggleCustomerProfile = (customerId) => {
    if (selectedCustomerId === customerId) {
      setSelectedCustomerId(null);
    } else {
      setSelectedCustomerId(customerId);
    }
  };
       
  return (
    <div>
      <table className="table table-strip">
        <thead>
          <tr>
            <th onClick={() => handleSort("title")}>
              Title {renderSortIcon("title")}
            </th>
            <th onClick={() => handleSort("firstName")}>
              First Name {renderSortIcon("firstName")}
            </th>
            <th onClick={() => handleSort("surname")}>
              Surname {renderSortIcon("surname")}
            </th>
            <th onClick={() => handleSort("email")}>
              Email {renderSortIcon("email")}
            </th>
            <th onClick={() => handleSort("roomId")}>
              Room Id {renderSortIcon("roomId")}
            </th>
            <th onClick={() => handleSort("checkInDate")}>
              Check-in Date {renderSortIcon("checkInDate")}
            </th>
            <th onClick={() => handleSort("checkOutDate")}>
              Check-out Date {renderSortIcon("checkOutDate")}
            </th>
            <th onClick={() => handleSort("nights")}>
              Nights {renderSortIcon("nights")}
            </th>
            <th>Show Profile</th>
          </tr>
        </thead>
        <tbody>
          {sortedBookings.map((booking) => {
            const checkInDate = moment(booking.checkInDate).format(
              "YYYY-MM-DD"
            );
            const checkOutDate = moment(booking.checkOutDate).format(
              "YYYY-MM-DD"
            );
            const nights = moment(checkOutDate).diff(
              moment(checkInDate),
              "days"
            );
            const isRowSelected = selectedCustomerId === booking.id;
             const rowClassName = isRowSelected ? "selected-row" : "";
                 
            return (
              <tr
                key={booking.id}
                className={rowClassName}
              
              >
                <td>{booking.title}</td>
                <td>{booking.firstName}</td>
                <td>{booking.surname}</td>
                <td>{booking.email}</td>
                <td>{booking.roomId}</td>
                <td>{checkInDate}</td>
                <td>{checkOutDate}</td>
                <td>{nights}</td>
                <td>
                  <button onClick={() => toggleCustomerProfile(booking.id)}>
                    Show Profile
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {selectedCustomerId && <CustomerProfile id={selectedCustomerId} />}
    </div>
  );
};

export default SearchResults;













