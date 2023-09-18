const { validationResult } = require("express-validator")
const { readJSON, writeJSON } = require("../data");
const User = require("../model/userModal");


module.exports = {
  login: (req, res) => {
    return res.render('login');
  },
  loginProcess: (req, res) => {
    const errors = validationResult(req);


    if (errors.isEmpty()) {
      const users = readJSON('users.json')
      const { id, name, role } = users.find(user => user.email === req.body.email)

      /* req.session.usuario = {
        id,
        name,
        role
      } */

      return res.redirect('/')

    } else {

      return res.render('login', {
        errors: errors.mapped(),
        old: req.body
      })
    }

  },
  register: (req, res) => {
    const errors = validationResult(req);
    return res.render('register', {errors: errors.mapped()});
  },
  registerNewUser: (req, res) => {

    const errors = validationResult(req);
    console.log("es",errors.mapped());

    if (errors.isEmpty()) {
      console.log("errrores");
      const users = readJSON('users.json');
      const user = new User(req.body);
      users.push(user);
      writeJSON(users, 'users.json')
      return res.redirect('login')
    } else {
    
      return res.render('register', { errors: errors.mapped()});
     
    }

  },
  productCart: (req, res) => {
    return res.render('productCart');
  }
}