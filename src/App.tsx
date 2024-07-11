import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./pages/adminPage";
import UserPage from "./pages/userPage";
import BusinessDetails from './components/admin/details.component'
import Services from "./components/admin/businessServices.component";
import Appointments from "./components/admin/orders.component";
import Customers from "./components/admin/customers.component";

function App() {
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminPage />} />
      <Route path="/*" element={<UserPage />} />
      {/* <Routes> */}
        <Route path="/admin/business-details" element={<BusinessDetails />} />
        <Route path="/admin/services" element={<Services />} />
        <Route path="/admin/appointments" element={<Appointments />} />
        <Route path="/admin/customers" element={<Customers />} />
      {/* </Routes> */}
    </Routes>
  );
}

export default App;
