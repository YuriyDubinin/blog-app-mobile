import axios from 'axios';

export const getBlogsList = () => {
    return axios.get('https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=100');
};

export const getPhotosList = () => {
    return axios.get('https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=100');
};
