"use strict";

module.exports = {
	
	BAD_REQUEST: {
		status: 400,
		type: "BAD_REQUEST",
		message: "Invalid request"
	},

	UNAUTHORIZED: {
		status: 401,
		type: "UNAUTHORIZED",
		message: "Unauthorized. Please login first!"
	},

	REQUEST_FAILED: {
		status: 402,
		type: "REQUEST_FAILED",
		message: "Request failed!"
	},	

	FORBIDDEN: {
		status: 403,
		type: "FORBIDDEN",
		message: "You have no permission for this resource!"
	},

	NOT_FOUND: {
		status: 404,
		type: "NOT_FOUND",
		message: "Not found!"
	},

	TOO_MANY_REQUEST: {
		status: 429,
		type: "TOO_MANY_REQUEST",
		message: "Too many request!"
	},

	SERVER_ERROR: {
		status: 500,
		type: "SERVER_ERROR",
		message: "Server error"
	},

	NOT_IMPLEMENTED: {
		status: 501,
		type: "NOT_IMPLEMENTED",
		message: "This resource is not implemented!"
	},

	
	/**
	 * Generate a JSON REST API response
	 *
	 * If data present and no error, we will send status 200 with JSON data
	 * If not data but error, we will send HTTP error code and message
	 * 
	 * @param  {Object} res        	ExpressJS res object
	 * @param  {json} 	data       	JSON response data
	 * @param  {Object} err        	Error object
	 * @param  {String} errMessage  Custom error message
	 */
	json(res, data, err, errMessage) {
		let response = {};

		if (err) {
			response.error = err;
			response.status = err.status || 500;
			if (errMessage)
				response.error.message = errMessage;

			response.data = data;

			return res.status(response.status).json(response);
		}

		response.status = 200;
		response.data = data;

		return res.json(response);
	}

};