// src/app.js
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
const middlewares = require('./middlewares');
const userRoutes = require('./routes/userRoutes');
const pingRoutes = require('./routes/pingRoutes');
const swaggerDocument = yaml.load('./src/swagger.yml');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Swagger setup
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/user', userRoutes);
app.use(pingRoutes);

// Error handling middleware
app.use(middlewares.notFoundMiddleware);
app.use(middlewares.errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
