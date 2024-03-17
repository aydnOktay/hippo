function authRoute(request, response, next) {
  if (request.session.loggedin) {
    next();
  } else {
    // ıf req url ıs ın admin/auth/login then next()
    if (request.originalUrl === "/admin/auth/login") {
      next();
      return;
    }
    response.redirect("/admin/auth/login");
  }
}

module.exports = authRoute;
