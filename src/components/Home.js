import React, { useState } from "react";
import "./css/home.css";
import moviePoster from "./images/download.jpeg";
import iconImages from "./images/iconsimage.png";
import { Link } from 'react-router-dom';

const Home = () => {
  // Separate states for each dropdown
  const [language, setLanguage] = useState("None");
  const [format, setFormat] = useState("None");
  const [price, setPrice] = useState("None");
  const [showtime, setShowtime] = useState("None");
  
  // State for search input
  const [searchQuery, setSearchQuery] = useState("");

  // Sample theatres with their addresses
  const theatres = [
    {
      name: "Inox The Marina, OMR, Chennai",
      address: "PVR Inox Limited 3rd Floor, The Marina Mall, Magabalipuram Road, Egattur, Chennai-603103 Tamil Nadu",
      timings: [
        { day: "Today", time: "4:30 pm" },
        { day: "Today", time: "7:15 pm" },
        { day: "Today", time: "10:00 pm" }
      ]
    },
    {
      name: "PVR Theyagaraja Thiruvanmiyur Chennai",
      address: "60 LB rd, Ranganatha Puram Chennai",
      timings: [] // No timings
    },
    {
      name: "PVR Sathyam Royapettah Chennai",
      address: "8,Thiru Vi ka Rd, Royapettah, Chennai-6000014",
      timings: [] // No timings
    },
    {
      name: "PVR SKLS Galaxy Mall, Red Hills Chennai",
      address: "PVR Limited, Survey N0.93/1C/2B,GNT Road,Hills, Chennai - 600",
      timings: [] // No timings
    },
    {
      name: "Big Cinemas",
      address: "Big Mall, Delhi",
      timings: [] // No timings
    }
  ];
  
  function renderTimings(theatre) {
    return theatre.timings.length > 0 ? (
      <div className="timingdiv">
        {theatre.timings.map((timing, index) => (
          <div className="timing" key={index}>
            <p>{timing.day}</p>
            <h6>{timing.time}</h6>
          </div>
        ))}
      </div>
    ) : (
      <p>No timings available</p>
    );
  }

  // Handle select dropdown changes
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleFormatChange = (event) => {
    setFormat(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleShowtimeChange = (event) => {
    setShowtime(event.target.value);
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter theatres based on search query
  const filteredTheatres = theatres.filter((theatre) =>
    theatre.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    theatre.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="booking-box">
      {/* Navbar */}
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
        {/* Movie Details */}
        <div className="movie-details">
          <img src={moviePoster} alt="Movie Poster" className="movie-poster" />
          <div className="movie-info">
            <h2>VANANGAAN</h2>
            <p className="movie-meta">
              U/A • 2h 03m • Friday, Jan 10, 2025 • Action, Drama • Tamil
            </p>
            <p className="movie-description">
              Wrongfully imprisoned, the protagonist fights to unmask the powerful mastermind behind his unjust incarceration.
            </p>
            <div className="buttons">
              <button className="watch-trailer">Watch Trailer</button>
              <button className="booking">Booking</button>
              <button className="reviews">Reviews</button>
            </div>
          </div>
        </div>

        {/* Date Selection */}
        <div className="date-selection">
          <h3>Select a date</h3>
          <div className="dates">
            {["Jan 20, 2025", "Jan 21, 2025", "Jan 22, 2025", "Jan 23, 2025", "Jan 24, 2025", "Jan 25, 2025", "Jan 26, 2025"].map(
              (date, index) => (
                <button key={index} className="date-button">
                  {date}
                </button>
              )
            )}
          </div>

          {/* Filter Options */}
          <div className="navoption">
            <div className="filter-option">
              <p>Filters:</p>

              {/* Language Select */}
              <select value={language} onChange={handleLanguageChange}>
                <option value="None" disabled>
                  Tamil
                </option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>

              {/* Format Select */}
              <select value={format} onChange={handleFormatChange}>
                <option value="None" disabled>
                  Formats
                </option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>

              {/* Price Select */}
              <select value={price} onChange={handlePriceChange}>
                <option value="None" disabled>
                  Price
                </option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>

              {/* Showtime Select */}
              <select value={showtime} onChange={handleShowtimeChange}>
                <option value="None" disabled>
                  Show time
                </option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>

            {/* Reset Button */}
            <button>Reset</button>
          </div>
        </div>

        {/* Search Theatre */}
        <div className="search-theater">
          <input
            type="text"
            placeholder="Search for a Theatre"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        {/* Display filtered theatres with addresses and timings */}
        <div className="theatre-list">
          {filteredTheatres.length > 0 ? (
            filteredTheatres.map((theatre, index) => (
              <div key={index} className="theatre-item">
                <strong>{theatre.name}</strong>
                <p>{theatre.address}</p>
                <Link to="/booking" className="link">{renderTimings(theatre)}</Link>

              </div>
            ))
          ) : (
            <p>No theatres found</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <h2>Download App</h2>
            <h5>From App Store or Play Store</h5>
            <img src={iconImages} alt="ICON" />
          </div>
          <div className="browser">
            <h2>Browse</h2>
            <p>Now Showing</p>
            <p>Coming Soon</p>
            <p>Theaters</p>
          </div>
          <div className="browse">
            <h2>Links</h2>
            <p>Signin</p>
            <p>Signup</p>
            <p>Help</p>
            <p>About us</p>
          </div>
          <div className="browse">
            <h2>Enquiry</h2>
            <p>Support Services</p>
            <p>(24 X 7)</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
