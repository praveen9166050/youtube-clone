import axios from 'axios'

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
    params: {
      maxResults: '50'
    },
    headers: {
        // 'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
        'x-rapidapi-key': '201a1984f1mshada3429e3a2bf13p1f8657jsn97fe3a3e85cf',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    try {
        const {data} = await axios.get(`${BASE_URL}/${url}`, options);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}