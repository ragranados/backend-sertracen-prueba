const ApiResponse = (ok, message, data = null) => {

    return {
        ok,
        message,
        data
    }
}

module.exports = ApiResponse;
