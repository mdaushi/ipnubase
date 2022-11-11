module.exports = {
  jsonSuccess(message = "", data = {}) {
    return {
      diagnostics: {
        status: true,
        message: message,
      },
      items: data,
    };
  },

  jsonError(message = "") {
    return {
      diagnostics: {
        status: false,
        message: message,
      },
    };
  },
};
