import React, { useState,useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

  


   const NewBookingForm = ({ handleAddBooking }) => {
    const [newBooking, setNewBooking] = useState({
      firstName: "",
      surname: "",
      email: "",
      title: "",
      roomId: "",
      checkInDate: null,
      checkOutDate: null,
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setNewBooking((prevBooking) => ({ ...prevBooking, [name]: value }));
      validateField(name, value);
    };

    const handleDateChange = (name, date) => {
      setNewBooking((prevBooking) => ({ ...prevBooking, [name]: date }));
      validateField(name, date);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      if (!validateForm()) {
        return;
      }


      handleAddBooking(newBooking);
      setNewBooking({
        firstName: "",
        surname: "",
        email: "",
        title: "",
        roomId: "",
        checkInDate: null,
        checkOutDate: null,
      });
      setErrors({});
    };

    const validateForm = () => {
      const validationErrors = {};
      let formIsValid = true;

      for (const fieldName in newBooking) {
        const fieldValue = newBooking[fieldName];
        const fieldValidationResult = validateField(fieldName, fieldValue);
        if (fieldValidationResult !== true) {
          validationErrors[fieldName] = fieldValidationResult;
          formIsValid = false;
        }
      }

      setErrors(validationErrors);
      return formIsValid;
    };

    const validateField = (fieldName, value) => {
      if (fieldName === "firstName" || fieldName === "surname") {
        if (value.trim() === "") {
          return `${fieldName} must not be empty`;
        }
      }
      if (fieldName === "email") {
        if (!isValidEmail(value)) {
          return "Invalid email address";
        }
      }
      if (fieldName === "roomId") {
        if (!isValidRoomId(value)) {
          return "Room ID must be a number between 0 and 100";
        }
      }
      if (fieldName === "checkInDate" || fieldName === "checkOutDate") {
        if (value === null) {
          return `Please select a ${
            fieldName === "checkInDate" ? "check-in" : "check-out"
          } date`;
        }
      }
      return true;
    };

    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const isValidRoomId = (roomId) => {
      const roomIdNumber = Number(roomId);
      return !isNaN(roomIdNumber) && roomIdNumber >= 0 && roomIdNumber <= 100;
    };

    const isFormValid = Object.values(errors).every((error) => error === true);

    return (
      <form className="new-booking-form" onSubmit={handleSubmit}>
        <h2 className="new-booking">New Booking</h2>
        <div>
          <label className="title-input">
            Title:
            <input
              type="text"
              name="title" className=""
              value={newBooking.title}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label className="title-input-fn">
            First Name:
            <input
              type="text"
              name="firstName"
              value={newBooking.firstName}
              onChange={handleInputChange}
              className={errors.firstName ? "invalid" : ""}
            />
            {errors.firstName && (
              <span className="error-message">{errors.firstName}</span>
            )}
            {!errors.firstName && <span className="success-message">*</span>}
          </label>
        </div>
        <div>
          <label className="title-input-surn">
            Surname:
            <input
              type="text"
              name="surname"
              value={newBooking.surname}
              onChange={handleInputChange}
              className={errors.surname ? "invalid" : ""}
            />
            {errors.surname && (
              <span className="error-message">{errors.surname}</span>
            )}
            {!errors.surname && <span className="success-message">*</span>}
          </label>
        </div>
        <div>
          <label className="title-input">
            Email:
            <input
              type="email"
              name="email"
              value={newBooking.email}
              onChange={handleInputChange}
              className={errors.email ? "invalid" : ""}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
            {!errors.email && <span className="success-message">*</span>}
          </label>
        </div>
        <div>
          <label className="title-input-rm">
            Room ID:
            <input
              type="text"
              name="roomId"
              value={newBooking.roomId}
              onChange={handleInputChange}
              className={errors.roomId ? "invalid" : ""}
            />
            {errors.roomId && (
              <span className="error-message">{errors.roomId}</span>
            )}
            {!errors.roomId && <span className="success-message">*</span>}
          </label>
        </div>
        <div>
          <label className="title-input-ck">
            Check-In Date:
            <DatePicker
              selected={newBooking.checkInDate}
              onChange={(date) => handleDateChange("checkInDate", date)}
            />
            {errors.checkInDate && (
              <span className="error-message">{errors.checkInDate}</span>
            )}
          </label>
        </div>
        <div>
          <label className="title-input-ckout">
            Check-Out Date:
            <DatePicker
              selected={newBooking.checkOutDate}
              onChange={(date) => handleDateChange("checkOutDate", date)}
            />
            {errors.checkOutDate && (
              <span className="error-message">{errors.checkOutDate}</span>
            )}
          </label>
        </div>
        <button className="submit-btn-ck" type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>
    );
  };

export default NewBookingForm;

























