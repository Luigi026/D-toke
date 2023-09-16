module.exports = {
    login: (req, res) => {
        return res.render('login');
    },
    loginProcess: (req, res) => {
      
    },
    register: (req, res) => {
      return res.render('register');
    },
    productCart: (req, res) => {
      return res.render('productCart');
    }
}