import API_URL from "./apiConfig";
// const API_URL=require('./apiConfig')
import axios from "axios";

// INDEX, SHOW, CREATE, UPDATE, DESTROY

// Get All Clinics
const getAllClinics = () => {
  return axios.get(`${API_URL}/clinic`);
};

// Add new Clinic
const AddNewClinic = (newClinic) => {
  return axios.post(`${API_URL}/clinic`, newClinic);
};
// Delete Clinic by ID
const deleteClinicByID = (id) => {
  return axios.delete(`${API_URL}/clinic/${id}`);
};

//add new appointment
const AddNewAppointment = (newAppointment) => {
  return axios.post(`${API_URL}/Reserve`, newAppointment);
};

// Edit Clinic by ID
const editClinicByID = (id, editedClinic) => {
  console.log("eidt", editedClinic);
  return axios.put(`${API_URL}/clinic/${id}`, editedClinic);
};

// Get user data
const getUserProfile = (id) => {
  return axios.get(`${API_URL}/Profile/${id}`);
};

// Edit user by ID
const editUser = (id, editedUser) => {
  console.log("eidt", editedUser);
  return axios.put(`${API_URL}/Profile/${id}`, editedUser);
};


// Get user appointment
const getUserAppointment = (userId) => {
  return axios.post(`${API_URL}/Appointment`, userId);
};

// Delete appointment by ID
const deleteAppointmentByID = (id) => {
  return axios.delete(`${API_URL}/Appointment/${id}`);
};

export {
  getAllClinics,
  AddNewClinic,
  deleteClinicByID,
  editClinicByID,
  AddNewAppointment,
  getUserProfile,
  editUser,
  getUserAppointment,
  deleteAppointmentByID
};
