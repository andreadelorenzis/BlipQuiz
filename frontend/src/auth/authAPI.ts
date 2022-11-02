import axios from 'axios';

const API_URL = '/api/users/';

const register = async (userData: Object, token: string) => {
    const response = await axios.post(API_URL,
        userData,
        {
            headers: {
                Authorization: 'Bearer ' + token
            },
        })

    if (response.data) {
        window.localStorage.setItem('isAuthenticated', 'true');
        window.localStorage.setItem('token', token);
    } else {
        // Error
        if (window.localStorage.getItem('isAuthenticated')) {
            window.localStorage.setItem('isAuthenticated', 'false');
            window.localStorage.removeItem('user');
        }
        console.log('An error occured when trying to connect with server');
    }

    return response.data;
}

export { register };