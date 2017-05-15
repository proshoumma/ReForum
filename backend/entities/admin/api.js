// controllers
const getAdminDashInfo = require('./controller').getAdminDashInfo;

/**
 * admin apis
 * @param  {Object} app
 */
const adminAPI = (app) => {
  // get all info for admin dashboard
  app.get('/api/admin/admin_dashboard_info', (req, res) => {
    if (req.user && req.user.role === 'admin') {
    // if (true) {
      getAdminDashInfo().then(
        (data) => { res.send(data); },
        (error) => { res.send(error); }
      );
    }
    else res.send({ error: 'You are not admin buddy 😛' });
  });
};

module.exports = adminAPI;
