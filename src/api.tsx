import axios from 'axios'
import { Appointment } from './interfaces/appointmentInterface'

const API_URL = 'http://localhost:8080'

export const getBusinessDetails = async () => {
  return await axios.get(`${API_URL}/business-details`)
}

export const getServices = async () => {
  return await axios.get(`${API_URL}/services/getServices`)
}

export const getAppointments = async () => {
  return await axios.get(`${API_URL}/appointments`)
}

export const getCustomers = async () => {
  return await axios.get(`${API_URL}/customers`)
}

export const addAppointment = async (appointment: Appointment) => {
  return await axios.post(`${API_URL}/meeting/createMeeting`, appointment)
}
