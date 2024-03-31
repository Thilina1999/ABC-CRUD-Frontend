import axios from './service';

export const staffLogin = (data) => axios.post('login', data);