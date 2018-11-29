const Sequelize = require('sequelize')

const sequelize = new Sequelize ('mysql://root:@localhost:3306/firstdb')

const User = sequelize.define('User',{
    id:{ 
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    password: {
        type:Sequelize.STRING,
        field: 'password'
    },
    username: {
        type: Sequelize.STRING,
        field: 'username'
    },
    email: {
        type: Sequelize.STRING,
        field: 'email'
    },
    phone: {
        type: Sequelize.STRING,
        field: 'phone'
    },
    fullName: {
        type: Sequelize.STRING,
        field: 'full_name'
    }
})

module.exports = User
