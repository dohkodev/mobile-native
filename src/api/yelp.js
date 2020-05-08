import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ls2i_JvY7GM_8IygSwoQx8-Zp6RM6Vw3yhNVFHjvbSj5xvwKj1VwaE3qTLpteqxpTawMmNXjtdD6S-Jo_VH3zOLz-z3vjGFG0N1qdfnuaP0GaBUXXmVdOoHgyNO0XnYx'
    }
});