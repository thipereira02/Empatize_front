import axios from "axios";

const BASE_URL = "http://localhost:4000";

function setConfig(token) {
	return {headers: {Authorization: `Bearer ${token}`}};
}

function registration(body){
	return axios.post(`${BASE_URL}/signup`, body);
}

function signInUser(body){
	return axios.post(`${BASE_URL}/signin`, body);
}

function finishSession(token) {
	return axios.post(`${BASE_URL}/logout`, [], setConfig(token));
}

export {registration, signInUser, finishSession};