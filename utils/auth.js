const withAuth = (req, res, next) => { // checks if user is logged in
    if (!req.session.logged_in) { 
      res.redirect('/login'); // if not logged in redirect them to login route
    } else {
      next(); // If we are logged in, carry on
    }
  };
  
  module.exports = withAuth;