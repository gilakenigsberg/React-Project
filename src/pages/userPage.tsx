import { Route, Link, Routes } from "react-router-dom";
import Home from "../components/user/home.component";
import BookAppointment from "../components/user/meeting.component";
import ContactForm from "../components/user/Contact.component";
import Services from "../components/user/services.component";
import Bar from "../components/user/Bar";

const UserPage = () => {
  return (
    <div className="user-page-container">
      <Bar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/BookAppointment" element={<BookAppointment />} />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </div>
  );
};

export default UserPage;
