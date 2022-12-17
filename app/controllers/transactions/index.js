const axios = require('axios');
const e = require('cors');
const { retrieveCustomersList } = require('../../services/paystack');
const {
	constants,
	Helper,
	ApiError,
	DBError,
	genericErrors,
} = require('../../utils');

const { successResponse, errorResponse } = Helper;
const { TRANSACTION_RESPONSE, TRANSACTION_LIST_RESPONSE, FAIL } =
	constants;

/**
 * A collection of controller methods for transactions
 * @class TransactionController
 */
class TransactionController {
	/**
	 * Sends All Transactions Balance
	 * @static
	 * @param {Request} req - The request from the endpoint
	 * @param {Request} res - The response returned.
	 * @param {Next} next - pass handling funtions
	 * @param {JSON} A JSON response containing Transaction totals
	 * @memberof TransactionController
	 */
	static async TransactionBalance(req, res, next) {
		try {
			const Data = req.Balance;

			return successResponse(res, {
				message: TRANSACTION_RESPONSE,
				data: Data,
			});
		} catch (e) {
			console.log(e.response.data);
			return next(new ApiError({ message: e.message }));
		}
	}

	/**
	 * Sends Transaction History
	 * @static
	 * @param {Request} req - The request from the endpoint
	 * @param {Request} res - The response returned.
	 * @param {Next} next - pass handling funtions
	 * @param {JSON} A JSON response containing Transaction totals
	 * @memberof TransactionController
	 */
	static async TransactionHistory(req, res, next) {
		try {
			const Data = req.TransactionHistory;

			return successResponse(res, {
				message: TRANSACTION_LIST_RESPONSE,
				data: Data,
			});
		} catch (e) {
			console.log(e);
			return next(new ApiError({ message: e.message }));
		}
	}

	/**
	 * Sends Transactions by date selected.
	 * @static
	 * @param {Request} req - The request from the endpoint
	 * @param {Request} res - The response returned.
	 * @param {Next} next - pass handling funtions
	 * @param {JSON} A JSON response containing Transaction totals
	 * @memberof TransactionController
	 */
	static async TransactionsbyDate(req, res, next) {
		try {
			let Data = req.net_Balance;
			Data = { ...Data };

			successResponse(res, {
				message: TRANSACTION_LIST_RESPONSE,
				data: Data,
			});
		} catch (error) {
			console.log(e);
			return next(new ApiError({ message: e.message, status: 401 }));
		}
	}
}

module.exports = TransactionController;
