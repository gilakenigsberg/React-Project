import React from "react"
import { Route, Link, Routes } from "react-router-dom"
import BusinessDetails from "../components/admin/details.component"
import Services from "../components/admin/businessServices.component"
import Appointments from "../components/admin/orders.component"
import Customers from "../components/admin/customers.component"

import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"

const AdminPage = () => {
  return (
    <div>
      <h1>Admin Panel</h1>
      <nav>
        <ul>
          <li>
            <Link to="/admin/business-details">Business Details</Link>
          </li>
          <li>
            <Link to="/admin/services">Services</Link>
          </li>
          <li>
            <Link to="/admin/appointments">Appointments</Link>
          </li>
          <li>
            <Link to="/admin/customers">Customers</Link>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/admin/business-details" element={<BusinessDetails />} />
        <Route path="/admin/services" element={<Services />} />
        <Route path="/admin/appointments" element={<Appointments />} />
        <Route path="/admin/customers" element={<Customers />} />
      </Routes>
    </div>
  )
}

export default AdminPage
