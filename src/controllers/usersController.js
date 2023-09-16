const { validationResult } = require("express-validator")
const { readJSON } = require("../data")


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

      return res.render('login',{
        errors : errors.mapped(),
        old : req.body
    })
    }

  },
  register: (req, res) => {
    return res.render('register');
  },
  productCart: (req, res) => {
    return res.render('productCart');
  }
}