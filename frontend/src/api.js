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

export { getAllClinics, AddNewClinic, deleteClinicByID };
