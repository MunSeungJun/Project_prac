import axios from "axios";

export const getSaleProducts = async () => {
    const response = await axios.get('http://localhost:3000/products/sale')
    return response.data
} 