const getStatusCode = (code) => code || 500;

const handler = function(err, req, res, next) {
    console.log(err.message);
    res.status(getStatusCode(err.httpStatusCode)).json({
        "error" : err.message
    });
};

module.exports = handler;