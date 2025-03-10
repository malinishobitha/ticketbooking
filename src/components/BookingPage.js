import React, { useState } from "react";
import "./css/bookingpage.css"; 
import bookingDetails from "./bookingDetails";
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; 

const BookingPage = () => {
    const [menuOpen, setMenuOpen] = useState(false); 
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seatRows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const seatsPerRow = 14;
  const bookedSeats = ["B1", "B2", "C3", "D4", "E5", "F6", "G7", "H8", "I9", "J10"]; 

  const CLASSIC_PRICE = 59.94;
  const PRIME_PRICE = 195.54;

  const toggleSeatSelection = (seat) => {
    if (bookedSeats.includes(seat)) return;

    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const calculateTotalPrice = () => {
    return selectedSeats.reduce((total, seat) => {
      const isPrime = seat[0] !== "A";
      return total + (isPrime ? PRIME_PRICE : CLASSIC_PRICE);
    }, 0);
  };

  return (
    <div className="bookingPage">
         <nav className="navbar">
            <span className="logo">Logo Name</span>
    
            {/* Toggler Button with Icons */}
            <button className="menu-toggler" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />} 
            </button>
    
            {/* Navbar Links */}
            <div className={`nav-links ${menuOpen ? "active" : ""}`}>
              <Link to="/">Home</Link>
              <Link to="/movies">Movies</Link>
              <Link to="/offers">Offers</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
    
            <div className="auth-buttons">
              <button className="signup">Signup</button>
              <button className="signin">Sign In</button>
            </div>
          </nav>
      

      <div className="container">
        <h5>VANANGAAN</h5>
        <div className="movieticket">
          <div className="movietime">
            <div className="time"><p>Today</p><h6>4:30 PM</h6></div>
            <div className="time"><p>Today</p><h6>7:30 PM</h6></div>
            <div className="time"><p>Today</p><h6>10:00 PM</h6></div>
          </div>

          <div className="seat-info">
  <div className="seat-status">
    <button className="available"></button><p>Available</p>
  </div>
  <div className="seat-status">
    <button className="booked"></button><p>Booked</p>
  </div>
  <div className="seat-status">
    <button className="selected"></button><p>Selected</p>
  </div>
</div>

        </div>

        <h5 className="screen-title">SCREEN</h5>

        <div className="seat-layout">
          {seatRows.map((row) => (
            <React.Fragment key={row}>
            
              {row === "A" && <div className="seat-category">Classic: ₹{CLASSIC_PRICE.toFixed(2)}</div>}

              <div className={`seat-row ${row === "A" ? "classic-row" : "prime-row"}`}>
                <span className="row-label">{row}</span>
                {Array.from({ length: seatsPerRow }, (_, i) => {
                  const seatId = `${row}${i + 1}`;
                  return (
                    <React.Fragment key={seatId}>
                      <button
                        className={`seat ${
                          bookedSeats.includes(seatId)
                            ? "booked"
                            : selectedSeats.includes(seatId)
                            ? "selected"
                            : "available"
                        }`}
                        onClick={() => toggleSeatSelection(seatId)}
                        disabled={bookedSeats.includes(seatId)}
                      >
                        {i + 1}
                      </button>

                      {i === 6 && <div className="column-gap"></div>}
                    </React.Fragment>
                  );
                })}
                <span className="row-label">{row}</span>
              </div>

              {row === "B" && <div className="seat-category">Prime: ₹{PRIME_PRICE.toFixed(2)}</div>}
            </React.Fragment>
          ))}
        </div>

        <div className="total-price">
          <div className="price">
          <div className="ticket">
          <h3>Tickets </h3><p>(Tax Includes)</p></div>
          <h3>Total Price: ₹{calculateTotalPrice().toFixed(2)}</h3>
        </div>
        
        <a href="bookingDetails"><button >Book Ticket</button></a>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
