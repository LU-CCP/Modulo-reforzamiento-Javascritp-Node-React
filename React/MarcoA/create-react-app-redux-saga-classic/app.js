const express = require('express');

const lagashRouters = require('./src/routes/lagasher.routes');

const app = express();

app.use(express.json());
app.use('/lagash', lagashRouters);

app.listen(3001, () => {
  console.log('System started on 3001');
});
