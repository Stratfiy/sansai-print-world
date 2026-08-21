import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND_URL}/api`;

export const createEnquiry = (payload) => axios.post(`${API}/enquiries`, payload);
export const getEnquiries = () => axios.get(`${API}/enquiries`);
export const updateEnquiryStatus = (id, status) => axios.patch(`${API}/enquiries/${id}`, { status });
