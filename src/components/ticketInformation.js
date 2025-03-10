import React, {useState} from "react";
import "./css/ticketInformation.css";
import moviePoster from "./images/download.jpeg";
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; 

const TicketConfirmation = () => {
    const [menuOpen, setMenuOpen] = useState(false); 
  
  return (
    <div className="ticket-page">
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
      <div className="ticket-container">
        <div className="ticket">
          <img src={moviePoster} alt="Movie Poster" className="movie-poster" />
          <div className="movies-details">
            <h2>VANANGAAN</h2>

            <p>U/A | 2h 03m | Friday, Jan 10, 2025</p>
            <p>Action, Drama - Tamil</p>
          </div>
        </div>
        <hr className="divider" />
        <div className="ticket-info">
          <img
            src="https://via.placeholder.com/80"
            alt="QR Code"
            className="qr-code"
          />
          <div className="booking-info">
            <p> 4 Tickets</p>
            <p> SCREEN 1</p>
            <p>Seat G9 - G12</p>
            <p> Booking ID: GHTO70K</p>
          </div>
        </div>
        <p className="confirmation-msg">
          A confirmation is sent via Email/WhatsApp within 2 minutes
        </p>
        <div className="actions">
          <button className="cancel"><i class="bi bi-x"></i> Cancel Booking</button>
          <button><i class="bi bi-telephone"></i>Contact Support</button>
        </div>
          <button className="download">⬇ Download</button>

      </div>
    </div>
  );
};

export default TicketConfirmation;
