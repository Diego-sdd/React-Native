import axios from 'axios';

//instancia do axio
const api = axios.create({
    baseURL: 'http://www.otherlevel.com.br/react/show.php'
});

export default api;