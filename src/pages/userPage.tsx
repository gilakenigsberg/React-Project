import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import Home from "../components/user/home.component";
import BookAppointment from "../components/user/meeting.component";
import ContactForm from "../components/user/payment.component";

const UserPage = () => {
  return (
    <div>
      <h1>Photography Business</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/book-appointment">Book Appointment</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
      </Routes>
    </div>
  );
};

export default UserPage;
