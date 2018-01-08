var express = require ('express'),
app = express(),
port = process.env.PORT || 3002;

app.listen(port);

console.log('clothe api server tarted on :' + port)