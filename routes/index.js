// glues all the routes together

const settingRoutes = require('./settings');
const graphRoutes = require('./graph');
const homeRoutes = require('./home')


// what we expect the user to put in
const constructorMethod = (app) => {
    app.use('/settings', settingRoutes);
    app.use('/graph', graphRoutes);
    app.use('/home', homeRoutes);


    app.use('*', (req, res) => {
      res.sendStatus(404);
    });
  };

module.exports = constructorMethod;