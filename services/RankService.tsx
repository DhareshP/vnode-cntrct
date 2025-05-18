import axios from "axios";

// const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080/api/ranks";
 const API_BASE = "http://localhost:8080/api/ranks";


// Define types (optional, expand as needed)
type ServiceType = string;
type CategoryType = string;

// GET ranks with service and category filters
export const getRanks = async (service: ServiceType, category: CategoryType) => {
    try {
        const res = await axios.get(`${API_BASE}`, {
            params: { service, category },
        });
        return res.data;
    } catch (error) {
        console.error("Error fetching ranks:", error);
        throw error;
    }
};

// GET regiments by service
export const getRegiments = async (service: ServiceType) => {
    try {
        const res = await axios.get(`${API_BASE}/regiments`, {
            params: { service },
        });
        return res.data;
    } catch (error) {
        console.error("Error fetching regiments:", error);
        throw error;
    }
};

// Default export for compatibility
const RankService = {
    getRanks,
    getRegiments,
};

export default RankService;
