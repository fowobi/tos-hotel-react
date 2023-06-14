// import React from "react";



// const CustomerProfile = ({ id }) => {
//   return <div>Customer {id} profile</div>;
// };




// export default CustomerProfile;


import React from "react";

const CustomerProfile = ({ profile }) => {
  if (!profile) {
    return null; // Don't render anything if the profile is not available yet
  }

  return (
    <div className="profile">
      <h2>Customer Profile</h2>
      <ul>
        <li>ID: {profile.id}</li>
        <li>Email: {profile.email}</li>
        <li>VIP: {profile.vip ? "Yes" : "No"}</li>
        <li>Phone: {profile.phoneNumber}</li>
      </ul>
    </div>
  );
};

export default CustomerProfile;
