const express = require('express');
const { logRequest } = require('./middleware');
const routes = require('./routes');

const app = express();
const port = 3000;

app.use(logRequest);
app.use('/', routes);

app.listen(port, () => {
    console.log(`MiddlewareApp listening at http://localhost:${port}`);
});