import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BookingPage from "./components/BookingPage"
import BookingDetails from "./components/bookingDetails";
import TicketInformation from "./components/ticketInformation";
import SignIn from "./components/signinPage";
// import Movies from "./components/Movies";
// import Offers from "./pages/Offers";
// import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/bookingDetails" element={<BookingDetails />} />
        <Route path="/ticketInformation" element={<TicketInformation />} />
        <Route path="/Signin" element = {<SignIn/>}/>
        {/* <Route path="/movies" element={<Movies />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
