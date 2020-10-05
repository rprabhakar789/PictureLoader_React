import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 82Hs7Xidgz7HV4wpZ_sIZRFJt200ORBQqsLl4aC3Peg'
    }
});