import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

class TarotApi {
	// the token for interactive with the API will be stored here.
	static token;

	static async request(endpoint, data = {}, method = 'get') {
		console.debug('API Call:', endpoint, data, method);

		const url = `${BASE_URL}/${endpoint}`;
		const headers = { Authorization: `Bearer ${TarotApi.token}` };
		const params = method === 'get' ? data : {};

		try {
			return (await axios({ url, method, data, params, headers })).data;
		} catch (err) {
			console.error('API Error:', err.response);
			let message = err.response.data.error.message;
			throw Array.isArray(message) ? message : [ message ];
		}
	}

	// Individual API routes

	/** Get the current user. */

	static async getCurrentUser(username) {
		let res = await this.request(`users/${username}`);
		return res.user;
	}

	static async login(data) {
		let res = await this.request(`auth/token`, data, 'post');
		return res.token;
	}

	/** Signup for site. */

	static async signup(data) {
		let res = await this.request(`auth/register`, data, 'post');
		return res.token;
	}

	/** Save user profile page. */

	static async saveProfile(username, data) {
		let res = await this.request(`users/${username}`, data, 'patch');
		return res.user;
	}

	static async newSpread(username, data) {
		let res = await this.request(`spreads/${username}`, data, 'post');
		return res.newSpread;
	}

	static async getSpreads(username) {
		let res = await this.request(`spreads/${username}`);
		return res.userSpreads;
	}

	static async deleteSpread(username, id) {
		let res = await this.request(`spreads/${username}/${id}`, null, 'delete');
		return res;
	}
}

export default TarotApi;
