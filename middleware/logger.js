// @desc    Logs requests to console

// Middleware, next() must be called during middleware
// Access to this object throughout all routes
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next() 
}

module.exports = logger