import axios from 'axios';
import { Appointment } from './interfaces/appointmentInterface';

const API_URL = 'http://localhost:5000';

export const getBusinessDetails = async () => {
  return await axios.get(`${API_URL}/business-details`);
};

export const getServices = async () => {
  return await axios.get(`${API_URL}/services`);
};

export const getAppointments = async () => {
  return await axios.get(`${API_URL}/appointments`);
};

export const getCustomers = async () => {
  return await axios.get(`${API_URL}/customers`);
};

export const addAppointment = async (appointment: Appointment) => {
  return await axios.post(`${API_URL}/appointments/add`, appointment);
};
