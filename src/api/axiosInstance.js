import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api/auth";

const axiosInstance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Request Interceptor: Attach Authorization Bearer token if stored
axiosInstance.interceptors.request.use(
    (config) => {
        try {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                const parsed = JSON.parse(storedUser);
                const token = parsed.token || parsed.accessToken || (typeof parsed === "string" ? parsed : null);
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
            }
        } catch (e) {
            console.error("Error retrieving auth token from localStorage:", e);
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor: Handle global response errors & 401 Unauthorized
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem("user");
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;