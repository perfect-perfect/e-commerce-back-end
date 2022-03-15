const express = require('express');

// why is this here? i am blocking out because it seems out of place. ???
// const { sequelize } = require('./models/Product'); 

const routes = require('./routes');
// import sequelize connection
const sequelize = ('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
});


// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });
