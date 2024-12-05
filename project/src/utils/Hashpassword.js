const bcrypt = require('bcrypt');

const saltrounds = 10;

const hashpassword = async (password) =>{
    const salt = await bcrypt.genSalt(saltrounds);
    return await bcrypt.hash(password, salt);
}

const comparepasword = async (plain, hashed) =>{
    return await bcrypt.compare(plain, hashed);
}

module.exports = {hashpassword, comparepasword};

