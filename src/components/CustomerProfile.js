import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [customerProfile, setCustomerProfile] = useState(null);

  useEffect(() => {
    const fetchCustomerProfile = async () => {
      try {
        const response = await fetch(
          `https://cyf-react.glitch.me/customers/${id}`
          
          
        );
        const data = await response.json();
        setCustomerProfile(data);
      } catch (error) {
        console.error("Error fetching customer profile:", error);
      }
    };

    fetchCustomerProfile();
  }, [id]);

  return (
    <div className="profile">
      {customerProfile ? (
        <div>
          <h2 className="cust-profile">Customer Profile</h2>
          <ul>
            <li>Customer ID: {customerProfile.id}</li>
            <li>Email: {customerProfile.email}</li>
            <li>VIP: {customerProfile.vip ? "Yes" : "No"}</li>
            <li>Phone Number: {customerProfile.phoneNumber}</li>
          </ul>
        </div>
      ) : (
        <div>Loading customer profile...</div>
      )}
    </div>
  );
};

export default CustomerProfile;


