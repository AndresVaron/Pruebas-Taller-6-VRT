const axios = require('axios').default;
const api = process.env.REACT_APP_SERVER_URL + '/api/';

const getRequest = (endpoint, resolve, reject) => {
    handleRequestResponse(axios.get(api + endpoint, { headers: {} }), resolve, reject);
};

const postRequest = (endpoint, body, resolve, reject) => {
    handleRequestResponse(axios.post(api + endpoint, body, { headers: {} }), resolve, reject);
};

const handleRequestResponse = (request, resolve, reject) => {
    request.then(res => {
        resolve(res.data.data);
    }).catch(err => {
        handleError(err, reject);
    });
}

const handleError = (err, reject) => {
    console.log(err);
    if (!err.response) {
        return reject('Se presentó un error realizando la petición');
    }
    console.log(err.response);

    const { status, data: { errors } } = err.response;
    if (status === 400 || status === 404 || status === 401) {
        if (status === 401) {
            localStorage.clear();
            window.alert(errors[0]);
            window.location.reload();
        }

        if (errors) {
            return reject(errors[0]);
        }
    }
    return reject('Se presentó un error realizando la petición');
};

module.exports = { getRequest, postRequest };