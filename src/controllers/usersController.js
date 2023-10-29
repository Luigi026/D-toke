const { validationResult } = require("express-validator");
const { hashSync } = require("bcryptjs");
const { readJSON, writeJSON } = require("../data");
const db = require("../database/models");
let users = readJSON("users.json");

module.exports = {
  login: (req, res) => {
    return res.render("login");
  },
  // ************************* --- Login --- ************************
  loginProcess: (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      db.User.findOne({
        where: {
          email: req.body.email,
        },
      })
        .then((user) => {
          req.session.userLogin = {
            id: user.id,
            name: user.name,
            role: user.roles_id
          };

          req.body.remember !== undefined &&
            res.cookie("dtokeUser", req.session.userLogin, {
              maxAge: 1000 * 60 * 5,
            });

          return res.redirect("/");
        })
        .catch((error) => console.log(error));
    } else {
      return res.render("login", {
        errors: errors.mapped(),
        old: req.body,
      });
    }
  },
  // ************************* --- register --- ************************
  register: (req, res) => {
    const errors = validationResult(req);
      return res.render("register", {
        errors: errors.mapped()
    });
  },
  registerNewUser: (req, res) => {
  
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { name, surname, email, password } = req.body;
      db.User.create({
        name: name.trim(),
        surname: surname.trim(),
        email: email.trim(),
        password: hashSync(password, 10),
        roles_id: 2,
      })
        .then((user) => {
          console.log(user);
          db.Address.create({
            users_id: user.id,
          }).then(() => {
            return res.redirect("/login");
          });
        })
        .catch((error) => console.log(error));
    } else {
      return res.render("register", {
        old: req.body,
        errors: errors.mapped(),
      });
    }
  },
  // ************************* --- profile --- ************************
  profile: (req, res) => {
    const user = users.find((user) => user.id === req.session.userLogin.id);

    return res.render("profile", {
      ...user,
    });
  },
  // ************************* --- update --- ************************
  update: (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { name } = req.body;

      const usersModify = users.map((user) => {
        if (user.email === req.body.email) {
          user.name = name.trim();
        }
        return user;
      });

      writeJSON(usersModify, "users.json");

      res.redirect("/");
    } else {
      return res.render("profile", {
        name: "",
        errors: errors.mapped(),
      });
    }
  },

  productCart: (req, res) => {
    return res.render("productCart");
  },
  logout: (req, res) => {
    req.session.destroy();
    res.cookie("dtokeUser", null, {
      maxAge: -1,
    });

    return res.redirect("/");
  },
};
