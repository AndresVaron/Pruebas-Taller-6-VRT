const { getRequest, postRequest } = require('./httpHelper');
const api = 'reports';

const createReport = () => {
    return new Promise((resolve, reject) => {
        postRequest(api, {}, resolve, reject);
    });
};

const getReports = () => {
    return new Promise((resolve, reject) => {
        getRequest(api, resolve, reject);
    });
};

module.exports = { createReport, getReports, };