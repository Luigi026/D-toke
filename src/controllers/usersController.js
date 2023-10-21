const { validationResult } = require("express-validator");
const { readJSON, writeJSON } = require("../data");
const User = require("../database/models/userModal");
let users = readJSON("users.json");

module.exports = {
  
  login: (req, res) => {
    return res.render('login');
  },
  loginProcess: (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const users = readJSON("users.json");
      const { id, name, role } = users.find(
        (user) => user.email === req.body.email
      );

      req.session.userLogin = {
        id,
        name,
        role,
      };

      req.body.remember !== undefined &&
        res.cookie("dtokeUser", req.session.userLogin, {
          maxAge: 1000 * 60 * 5,
        });

      return res.redirect("/");
    } else {
      return res.render("login", {
        errors: errors.mapped(),
        old: req.body,
      });
    }
  },
  register: (req, res) => {
    const errors = validationResult(req);
    return res.render('register', {errors: errors.mapped()});
  },
  registerNewUser: (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const users = readJSON("users.json");
      const user = new User(req.body);

      users.push(user);
      writeJSON(users, "users.json");

      return res.redirect("login");
    } else {
      return res.render('register', { errors: errors.mapped(), old: req.body});
    }
  },
  profile: (req, res) => {
    const user = users.find(user => user.id === req.session.userLogin.id);

    return res.render("profile", {
      ...user,
    });
  },
  update: (req, res) => {
  
    const errors = validationResult(req);
    
    if (errors.isEmpty()) {
    
     
    const {name} = req.body;
    
		const usersModify = users.map(user => {
		
			if(user.email === req.body.email){
				user.name = name.trim();
      }
			return user
		})

		writeJSON(usersModify, "users.json");
		

		
		res.redirect('/')
    
    }else {
    
      return res.render("profile", {
        name : "",
        errors: errors.mapped(),
      });
    
    }
  
  
   

  },

  productCart: (req, res) => {
    return res.render("productCart");
  },
  logout : (req,res) => {
    req.session.destroy();
    res.cookie('dtokeUser', null,{
        maxAge : -1
    })
    
    return res.redirect('/')
},
};
