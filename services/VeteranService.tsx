import axios from "axios";

// Use environment variable or fallback
// const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080/api/veteran";
const API_BASE = "http://localhost:8080/api/veteran";

// Types (you can expand these as per actual data shape)
export type Filters = Record<string, any>;
export type VeteranPayload = Record<string, any>;

// GET veterans with filters
export const getFilteredVeterans = async (filters: Filters) => {
    try {
        const response = await axios.get(`${API_BASE}`, { params: filters });
        return response.data;
    } catch (error) {
        console.error("Error fetching filtered veterans:", error);
        throw error;
    }
};

// GET categories
export const getCategories = async () => {
    try {
        const res = await axios.get(`${API_BASE}/category`);
        return res.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
};

// GET services
export const getServices = async () => {
    try {
        const res = await axios.get(`${API_BASE}/services`);
        return res.data;
    } catch (error) {
        console.error("Error fetching services:", error);
        throw error;
    }
};

// GET districts
export const getDistricts = async () => {
    try {
        const res = await axios.get(`${API_BASE}/district`);
        return res.data;
    } catch (error) {
        console.error("Error fetching districts:", error);
        throw error;
    }
};

// GET veteran types
export const getVeteranTypes = async () => {
    try {
        const res = await axios.get(`${API_BASE}/veteranType`);
        return res.data;
    } catch (error) {
        console.error("Error fetching veteran types:", error);
        throw error;
    }
};

// POST: create veteran
export const createVeteran = async (payload: VeteranPayload) => {
    try {
        const res = await axios.post(`${API_BASE}`, payload);
        return res.data;
    } catch (error) {
        console.error("Error creating veteran:", error);
        throw error;
    }
};

// GET awards
export const getAwards = async () => {
    try {
        const res = await axios.get(`${API_BASE}/awards`);
        return res.data;
    } catch (error) {
        console.error("Error fetching awards:", error);
        throw error;
    }
};

// Default export (for older usage)
const VeteranService = {
    getFilteredVeterans,
    getCategories,
    getServices,
    getDistricts,
    getVeteranTypes,
    createVeteran,
    getAwards,
};

export default VeteranService;
