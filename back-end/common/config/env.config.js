const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    "port": process.env.PORT,
    "appEndpoint": process.env.APP_END_POINT,
    "apiEndpoint": process.env.API_END_POINT,
    "databaseConnection": process.env.DATABASE_CONNECTION,
    "environment": process.env.ENVIRONMENT
};