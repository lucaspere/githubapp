const express = require('express');
require('./db/mongoose');

const reposRoute = require('./routers/repos');

const app = express();
const port = process.env.PORT || 3000

app.use(express.json());
app.use(reposRoute);


app.listen(port, () => {
   console.log('Servidor rodanndo na porta ' + port)
})