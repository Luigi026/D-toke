const { v4: uuidv4 } = require('uuid');
const {hashSync} = require('bcryptjs');

const User = function ({name, email, password}) {

    this.id = uuidv4();
    this.name = name.trim();
    this.email = email.trim();
    this.password = hashSync(password,10);
    this.createAt = new Date;
}

module.exports = User