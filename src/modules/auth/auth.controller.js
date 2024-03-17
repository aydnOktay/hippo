const AppError = require("../../errors/AppError");

const pageView = async (req, res) => {
  res.render("admin/login", {
    data: { message: "" },
  });
};
const login = async (req, res) => {
  const { username, password } = req.body;
  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (username === adminUsername && password === adminPassword) {
    req.session.loggedin = true;
    res.redirect("/admin");
  } else {
    res.render("admin/login", {
      data: { message: "Hatalı kullanıcı adı yada şifre" },
    });
  }
};
const logout = async (req, res) => {
  req.session.loggedin = false;
  res.redirect("/admin/auth/login");
};

module.exports = {
  pageView,
  login,
  logout,
};
