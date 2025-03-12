import React, { useState, useEffect } from "react";
import "./css/bookingdetails.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; 

const seatPrice = 100; 
const gstPerSeat = 4;  

const BookingDetails = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [gst, setGst] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);
    const [cardDetails, setCardDetails] = useState({ holderName: "", number: "", expiry: "" });
    const navigate = useNavigate();

    useEffect(() => {
        const storedSeats = JSON.parse(localStorage.getItem("pendingSeats")) || [];
        const storedTotal = parseFloat(localStorage.getItem("pendingTotal")) || 0;
        setSelectedSeats(storedSeats);
        setSubtotal(storedTotal);
        setGst(storedSeats.length * gstPerSeat);
        setGrandTotal(storedTotal + storedSeats.length * gstPerSeat);
    }, []);

    const handleCardInputChange = (e) => {
        const { name, value } = e.target;
        setCardDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handlePayment = () => {
        if (!cardDetails.holderName || !cardDetails.number || !cardDetails.expiry) {
            alert("Please fill in all card details.");
            return;
        }
        localStorage.setItem("bookedSeats", JSON.stringify([...selectedSeats, ...JSON.parse(localStorage.getItem("bookedSeats")) || []]));
        localStorage.removeItem("pendingSeats");
        localStorage.removeItem("pendingTotal");
        navigate("/ticketInformation");
    };

    return (
        <div className="bookingPage">
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
          <Link to="/Signin"><button className="Signin">Sign In</button></Link>
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
                            {selectedSeats.map((seat, index) => (
                                <button key={index} className="selected">
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
                    <input type="text" name="holderName" value={cardDetails.holderName} onChange={handleCardInputChange} />
                    <label>Card Number</label>
                    <input type="text" name="number" value={cardDetails.number} onChange={handleCardInputChange} />
                    <label>Expiry Date</label>
                    <input type="text" name="expiry" value={cardDetails.expiry} onChange={handleCardInputChange} />
                    <button onClick={handlePayment}>Pay</button>
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