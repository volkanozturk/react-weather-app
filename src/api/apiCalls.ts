import axios from 'axios';

export const changeLanguage = (language: string) => {
    axios.defaults.headers['accept-language'] = language;
};
export const getData = (city: string) => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`);

};