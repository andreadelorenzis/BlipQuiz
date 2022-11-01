import axios from 'axios';

const API_URL = '/api/users/';

const register = async (userData: Object, token: String) => {
    const response = await axios.post(API_URL,
        userData,
        {
            headers: {
                Authorization: 'Bearer ' + token
            },
        })

    if (response.data) {
        window.localStorage.setItem('isAuthenticated', 'true');
        window.localStorage.setItem('user', JSON.stringify(userData));
    } else {
        // Error
        if (window.localStorage.getItem('isAuthenticated')) {
            window.localStorage.setItem('isAuthenticated', 'false');
            window.localStorage.setItem('user', '');
        }
        console.log('An error occured when trying to connect with server');
    }

    return response.data;
}

export { register };