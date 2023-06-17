
import React from "react";

const CustomerProfile = ({ profile }) => {
  if (!profile) {
    return null; 
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
