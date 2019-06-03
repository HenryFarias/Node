#!/usr/bin/env nodejs

const app = require('./src/app');

const PORT = process.env.PORT || 5000;
console.time("startedIn");
app.listen(PORT, function () {
    console.timeEnd("startedIn");
    console.log('Server start in port: ' + PORT);
});