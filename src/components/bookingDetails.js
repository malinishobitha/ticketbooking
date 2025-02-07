import React, { useState } from "react";
import "./css/bookingdetails.css";

const seatPrice = 100; // Set seat price per seat
const gstPerSeat = 4;  // GST per seat

const BookingDetails = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelection = (seat) => {
    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seat)
        ? prevSeats.filter((s) => s !== seat)
        : [...prevSeats, seat]
    );
  };

  const subtotal = selectedSeats.length * seatPrice;
  const gst = selectedSeats.length * gstPerSeat;
  const grandTotal = subtotal + gst;

  return (
    <div className="bookingPage">
      <nav className="navbar">
        <span className="logo">Logo Name</span>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Movies</a>
          <a href="#">Offers</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="auth-buttons">
          <button className="signup">Signup</button>
          <button className="signin">Sign In</button>
        </div>
      </nav>

      <div className="container">
        <div className="details">
          <div className="information">
            <p>Your Details</p>
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Email" />
            <input type="number" placeholder="Your Mobile Number" />
          </div>

          <div className="summary">
            <p>Summary</p>
            <p>Seat Info</p>
            <div className="seat-no">
              {[9, 10, 11, 12].map((seat) => (
                <button
                  key={seat}
                  onClick={() => handleSeatSelection(seat)}
                  className={selectedSeats.includes(seat) ? "selected" : ""}
                >
                  {seat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="Yourcard-container">
        <div className="cartdetails">
          <label>Card Holder Name</label>
          <input type="text" />
          <label>Card Number</label>
          <input type="text" />
          <label>Expiry Date</label>
          <input type="text" />
         <a href="ticketInformation"><button>Pay</button></a>
        </div>

        <div className="paymentdetails">
          <p>Subtotal   : ₹{subtotal}</p>
          <p>GST        : ₹{gst}</p>
          <p>Grand Total: ₹{grandTotal}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
