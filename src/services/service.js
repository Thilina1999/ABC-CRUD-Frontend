import ax from 'axios';

const axios = ax.create({
    baseURL: 'http://localhost:5001/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axios;