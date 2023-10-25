import axios from 'axios';

const numverify = async(num) => {
    return axios.get(`http://apilayer.net/api/validate?access_key=83ee4d17afd8cf7db00ae771bfa87e16&number=${num}`);
};

export default numverify;