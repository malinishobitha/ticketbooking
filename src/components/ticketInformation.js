import React, { useState, useEffect } from "react";
import "./css/ticketInformation.css";
import moviePoster from "./images/download.jpeg";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const TicketConfirmation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [userEmail, setUserEmail] = useState("");
    
    useEffect(() => {
        const storedEmail = localStorage.getItem("userEmail");
        setUserEmail(storedEmail);
        
        const allBookings = JSON.parse(localStorage.getItem("allBookings")) || [];
        const userBooking = allBookings.find(booking => booking.email === storedEmail);
        
        if (userBooking) {
            setSelectedSeats(userBooking.seats || []);
            setTotalPrice(userBooking.totalPrice || 0);
        }
    }, []);
    
    return (
        <div className="ticket-page">
            <nav className="navbar">
                <span className="logo">Logo Name</span>
                <button className="menu-toggler" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>
                <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <Link to="/">Home</Link>
                    <Link to="/">Movies</Link>
                    <Link to="/">Offers</Link>
                    <Link to="/">Contact Us</Link>
                </div>
                <div className="auth-buttons">
                    <button className="signup">Signup</button>
                    <Link to="Signin"><button className="signin">Sign In</button></Link>
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
                    <img src="https://via.placeholder.com/80" alt="QR Code" className="qr-code" />
                    <div className="booking-info">
                        <p>{selectedSeats.length} Tickets</p>
                        <p>SCREEN 1</p>
                        <p>Seat(s): {selectedSeats.join(", ")}</p>
                        <p>Booking ID: GHTO70K</p>
                        <p>Total Price: ₹{totalPrice.toFixed(2)}</p>
                      
                    </div>
                </div>
                <p className="confirmation-msg">
                    A confirmation is sent via Email/WhatsApp within 2 minutes
                </p>
                <div className="actions">
                    <button className="cancel"><i className="bi bi-x"></i> Cancel Booking</button>
                    <button><i className="bi bi-telephone"></i>Contact Support</button>
                </div>
                <button className="download">⬇ Download</button>
            </div>
        </div>
    );
};

export default TicketConfirmation;
