// import React, { useState,useEffect } from "react";
// import Search from "./Search.js";
// import SearchResults from "./components/SearchResults.js";
// // import fakeBookings from "./data/fakeBookings.json";

// const Bookings = () => {
//    const [bookings, setBookings] = useState([]);
//    const [isLoading, setIsLoading] = useState(false);
//    const [error, setError] = useState(null);

//      useEffect(() => {
//        //  console.log("Page first renders on the screen.");
//        setIsLoading(true); 

//        fetch("https://cyf-react.glitch.me/delayed")
//          .then((response) => {
//            if (!response.ok) {
//              throw new Error("Failed to fetch data"); 
//            }
//            return response.json();
//          })
//          .then((data) => {
//            setBookings(data);
//            setIsLoading(false);
//          })
//          .catch((error) => {
//            console.error("Error fetching bookings:", error);
//            setError(error);
//            setIsLoading(false);
//          });
         
//      }, []);

//     const search = (searchVal) => {
//     // console.info("TO DO!", searchVal);
//       const filteredBookings = bookings.filter(
//        (booking) =>
//          booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
//          booking.surname.toLowerCase().includes(searchVal.toLowerCase())
//      );
//      setBookings(filteredBookings);
//   };

//   return (
//     <div className="App-content">
//       <div className="container">
//         <Search search={search} />
//         {isLoading ? (
//           <p>Loading data... Please wait.</p>
//         ) : error ? (
//           <p>Error: {error.message}</p> 
//         ) : (
//         <SearchResults bookings={bookings}/>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Bookings;




// import React, { useState, useEffect } from "react";
// import moment from "moment";
// import Search from "./Search.js";
// import SearchResults from "./components/SearchResults.js";
// import CustomerProfile from "./components/CustomerProfile.js"

// const Bookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [newBooking, setNewBooking] = useState({
//     firstName: "",
//     surname: "",
//     email: "",
//     title: "",
//     roomId: "",
//     checkInDate: "",
//     checkOutDate: "",
//   });

//   const [selectedRows, setSelectedRows] = useState([]);
//   const [selectedCustomerId, setSelectedCustomerId] = useState(null);
//   const [customerProfile, setCustomerProfile] = useState(null);

//   useEffect(() => {
//     setIsLoading(true);

//     fetch("https://cyf-react.glitch.me/delayed")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setBookings(data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching bookings:", error);
//         setError(error);
//         setIsLoading(false);
//       });
//   }, []);

//   const search = (searchVal) => {
//     const filteredBookings = bookings.filter(
//       (booking) =>
//         booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
//         booking.surname.toLowerCase().includes(searchVal.toLowerCase())
//     );
//     setBookings(filteredBookings);
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setNewBooking((prevBooking) => ({ ...prevBooking, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newId = bookings.length + 1;
//     const newBookingWithId = { ...newBooking, id: newId };
//     setBookings((prevBookings) => [...prevBookings, newBookingWithId]);
//     setNewBooking({
//       firstName: "",
//       surname: "",
//       email: "",
//       title: "",
//       roomId: "",
//       checkInDate: "",
//       checkOutDate: "",
//     });
//   };

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

//   return (
//     <div className="App-content">
//       <div className="container">
//         <Search search={search} />
//         {isLoading ? (
//           <p>Loading data... Please wait.</p>
//         ) : error ? (
//           <p>Error: {error.message}</p>
//         ) : (
//           <SearchResults
//             bookings={bookings}
//             selectedRows={selectedRows}
//             toggleRowSelection={toggleRowSelection}
//             showCustomerProfile={showCustomerProfile}
//           />
//         )}

//         <form className="new-booking-form" onSubmit={handleSubmit}>
//           <h2>Create a new booking</h2>
//           <div>
//             <label>
//               First Name:
//               <input
//                 type="text"
//                 name="firstName"
//                 value={newBooking.firstName}
//                 onChange={handleInputChange}
//               />
//             </label>
//           </div>
//           <div>
//             <label>
//               Surname:
//               <input
//                 type="text"
//                 name="surname"
//                 value={newBooking.surname}
//                 onChange={handleInputChange}
//               />
//             </label>
//           </div>
//           <div>
//             <label>
//               Email:
//               <input
//                 type="email"
//                 name="email"
//                 value={newBooking.email}
//                 onChange={handleInputChange}
//               />
//             </label>
//           </div>
//           <div>
//             <label>
//               Title:
//               <input
//                 type="text"
//                 name="title"
//                 value={newBooking.title}
//                 onChange={handleInputChange}
//               />
//             </label>
//           </div>
//           <div>
//             <label>
//               Room ID:
//               <input
//                 type="text"
//                 name="roomId"
//                 value={newBooking.roomId}
//                 onChange={handleInputChange}
//               />
//             </label>
//           </div>
//           <div>
//             <label>
//               Check-In Date:
//               <input
//                 type="text"
//                 name="checkInDate"
//                 value={newBooking.checkInDate}
//                 onChange={handleInputChange}
//               />
//             </label>
//           </div>
//           <div>
//             <label>
//               Check-Out Date:
//               <input
//                 type="text"
//                 name="checkOutDate"
//                 value={newBooking.checkOutDate}
//                 onChange={handleInputChange}
//               />
//             </label>
//           </div>
//           <button type="submit">Submit</button>
//         </form>

//         {selectedCustomerId && <CustomerProfile profile={customerProfile} />}
//       </div>
//     </div>
//   );
// };

// export default Bookings;


// import React, { useState, useEffect } from "react";
// import moment from "moment";
// // import CustomerProfile from "./components/CustomerProfile";
// import NewBookingForm from "./components/NewBookingForm";
// import SearchResults from "./components/SearchResults";
// import Search from "./Search";

// const Bookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setIsLoading(true);

//     fetch("https://cyf-react.glitch.me/delayed")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setBookings(data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching bookings:", error);
//         setError(error);
//         setIsLoading(false);
//       });
//   }, []);

//   const search = (searchVal) => {
//     const filteredBookings = bookings.filter(
//       (booking) =>
//         booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
//         booking.surname.toLowerCase().includes(searchVal.toLowerCase())
//     );
//     setBookings(filteredBookings);
//   };

//   const handleAddBooking = (newBooking) => {
//     const newBookingWithId = {
//       ...newBooking,
//       id: bookings.length + 1,
//     };
//     setBookings((prevBookings) => [...prevBookings, newBookingWithId]);
//   };

//   return (
//     <div className="App-content">
//       <div className="container">
//         <Search Search={Search} />
//         {isLoading ? (
//           <p>Loading data... Please wait.</p>
//         ) : error ? (
//           <p>Error: {error.message}</p>
//         ) : (
//           <>
//             <SearchResults bookings={bookings} />
//             <NewBookingForm handleAddBooking={handleAddBooking} />
          
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Bookings;




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
       const filteredBookings = bookings.filter(
         (booking) =>
           booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
           booking.surname.toLowerCase().includes(searchVal.toLowerCase())
       );
       setBookings(filteredBookings);
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
