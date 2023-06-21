// import React, { useState,useEffect } from "react";
// import moment from "moment";
// import CustomerProfile from "./CustomerProfile";

// const SearchResults = ({ bookings }) => {
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [selectedCustomerId, setSelectedCustomerId] = useState(null);
//   const [customerProfile, setCustomerProfile] = useState(null);


//   const toggleRowSelection = (id) => {
//     setSelectedRows((prevSelectedRows) => {
//       if (prevSelectedRows.includes(id)) {
//         return prevSelectedRows.filter((rowId) => rowId !== id);
//       } else {
//         return [...prevSelectedRows, id];
//       }
//     });
//   };
//      const showCustomerProfile = (id) => {
//        setSelectedCustomerId(id);
//      };

//      useEffect(() => {
//        if (selectedCustomerId) {
//          fetch(`https://cyf-react.glitch.me/customers/${selectedCustomerId}`)
//            .then((response) => response.json())
//            .then((data) => setCustomerProfile(data))
//            .catch((error) =>
//              console.error("Error fetching customer profile:", error)
//            );
//        }
//      }, [selectedCustomerId]);


//   return (
//     <div className="search-results">
//       <table className="table">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>First Name</th>
//             <th>Surname</th>
//             <th>Email</th>
//             <th>Room ID</th>
//             <th>Check-In Date</th>
//             <th>Check-Out Date</th>
//             <th>Nights</th>
//             <th>Show Customer Profile</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.map((booking) => {
//             const checkInDate = moment(booking.checkInDate);
//             const checkOutDate = moment(booking.checkOutDate);
//             const nights = checkOutDate.diff(checkInDate, "days");

//             return (
//               <tr
//                 key={booking.id}
//                 onClick={() => toggleRowSelection(booking.id)}
//                 className={selectedRows.includes(booking.id) ? "selected" : ""}
//               >
//                 <td>{booking.id}</td>
//                 <td>{booking.title}</td>
//                 <td>{booking.firstName}</td>
//                 <td>{booking.surname}</td>
//                 <td>{booking.email}</td>
//                 <td>{booking.roomId}</td>
//                 <td>{booking.checkInDate}</td>
//                 <td>{booking.checkOutDate}</td>
//                 <td>{nights}</td>

//                 <td>
//                   <button onClick={() => showCustomerProfile(booking.id)}>
//                     Show profile
//                   </button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       {selectedCustomerId && <CustomerProfile profile={customerProfile} />}
//     </div>
//   );
// };

// export default SearchResults;




// import React, { useState, useEffect } from "react";
// import moment from "moment";
// import CustomerProfile from "./CustomerProfile";

// const SearchResults = ({ bookings }) => {
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [selectedCustomerId, setSelectedCustomerId] = useState(null);
//   const [customerProfile, setCustomerProfile] = useState(null);
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: "" });

//   const toggleRowSelection = (id) => {
//     setSelectedRows((prevSelectedRows) => {
//       if (prevSelectedRows.includes(id)) {
//         return prevSelectedRows.filter((rowId) => rowId !== id);
//       } else {
//         return [...prevSelectedRows, id];
//       }
//     });
//   };

//   const showCustomerProfile = (id) => {
//     setSelectedCustomerId(id);
//   };

   

//   useEffect(() => {
//     if (selectedCustomerId) {
//       fetch(`https://cyf-react.glitch.me/customers/${selectedCustomerId}`)
//         .then((response) => response.json())
//         .then((data) => setCustomerProfile(data))
//         .catch((error) =>
//           console.error("Error fetching customer profile:", error)
//         );
//     }
//   }, [selectedCustomerId]);

//   const sortTable = (key) => {
//     let direction = "ascending";
//     if (sortConfig.key === key && sortConfig.direction === "ascending") {
//       direction = "descending";
//     }
//     setSortConfig({ key, direction });
//   };

//   const sortedBookings = [...bookings].sort((a, b) => {
//     if (sortConfig.key && a[sortConfig.key] && b[sortConfig.key]) {
//       if (a[sortConfig.key] < b[sortConfig.key]) {
//         return sortConfig.direction === "ascending" ? -1 : 1;
//       }
//       if (a[sortConfig.key] > b[sortConfig.key]) {
//         return sortConfig.direction === "ascending" ? 1 : -1;
//       }
//     }
//     return 0;
//   });

//   return (
//     <div className="search-results">
//       <table className="table">
//         <thead>
//           <tr>
//             <th onClick={() => sortTable("id")}>ID</th>
//             <th onClick={() => sortTable("title")}>Title</th>
//             <th onClick={() => sortTable("firstName")}>First Name</th>
//             <th onClick={() => sortTable("surname")}>Surname</th>
//             <th onClick={() => sortTable("email")}>Email</th>
//             <th onClick={() => sortTable("roomId")}>Room ID</th>
//             <th onClick={() => sortTable("checkInDate")}>Check-In Date</th>
//             <th onClick={() => sortTable("checkOutDate")}>Check-Out Date</th>
//             <th onClick={() => sortTable("nights")}>Nights</th>
//             <th>Show Customer Profile</th>
//           </tr>
//         </thead>
//         <tbody>
//           {sortedBookings.map((booking) => {
//             const checkInDate = moment(booking.checkInDate);
//             const checkOutDate = moment(booking.checkOutDate);
//             const nights = checkOutDate.diff(checkInDate, "days");

//             return (
//               <tr
//                 key={booking.id}
//                 onClick={() => toggleRowSelection(booking.id)}
//                 className={selectedRows.includes(booking.id) ? "selected" : ""}
//               >
//                 <td>{booking.id}</td>
//                 <td>{booking.title}</td>
//                 <td>{booking.firstName}</td>
//                 <td>{booking.surname}</td>
//                 <td>{booking.email}</td>
//                 <td>{booking.roomId}</td>
//                 <td>{booking.checkInDate}</td>
//                 <td>{booking.checkOutDate}</td>
//                 <td>{nights}</td>
//                 <td>
//                   <button onClick={() => showCustomerProfile(booking.id)}>
//                     Show profile
//                   </button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       {selectedCustomerId && <CustomerProfile profile={customerProfile} />}
//     </div>
//   );
// };

// export default SearchResults;










// import React, { useState } from "react";
// import moment from "moment";
// import CustomerProfile from "./CustomerProfile";

// const SearchResults = ({ bookings }) => {
//   const [selectedCustomerId, setSelectedCustomerId] = useState(null);

//   const toggleCustomerProfile = (customerId) => {
//     if (selectedCustomerId === customerId) {
//       setSelectedCustomerId(null);
//     } else {
//       setSelectedCustomerId(customerId);
//     }
//   };

//   return (
//     <div>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>First Name</th>
//             <th>Surname</th>
//             <th>Email</th>
//             <th>Room Id</th>
//             <th>Check-in Date</th>
//             <th>Check-out Date</th>
//             <th>Nights</th>
//             <th>Show Profile</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.map((booking) => {
//             const checkInDate = moment(booking.checkInDate).format(
//               "YYYY-MM-DD"
//             );
//             const checkOutDate = moment(booking.checkOutDate).format(
//               "YYYY-MM-DD"
//             );
//             const nights = moment(checkOutDate).diff(
//               moment(checkInDate),
//               "days"
//             );
//             const isRowSelected = selectedCustomerId === booking.id;
//             const rowClassName = isRowSelected ? "selected-row" : "";

//             return (
//               <tr key={booking.id} className={rowClassName}>
//                 <td>{booking.title}</td>
//                 <td>{booking.firstName}</td>
//                 <td>{booking.surname}</td>
//                 <td>{booking.email}</td>
//                 <td>{booking.roomId}</td>
//                 <td>{checkInDate}</td>
//                 <td>{checkOutDate}</td>
//                 <td>{nights}</td>
//                 <td>
//                   <button onClick={() => toggleCustomerProfile(booking.id)}>
//                     Show Profile
//                   </button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       {selectedCustomerId && <CustomerProfile id={selectedCustomerId} />}
//     </div>
//   );
// };

// export default SearchResults;



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
      <table className="table table-striped">
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
              <tr key={booking.id} className={rowClassName}>
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







