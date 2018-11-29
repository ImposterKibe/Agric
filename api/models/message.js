const Sequelize = require('sequelize')

const sequelize = new Sequelize ('mysql://root:@localhost:3306/firstdb')

const Message = sequelize.define('Message',{
    id:{ 
        type:Sequelize.STRING,
        primaryKey:true,
        field: 'id'

    },
    to: {
        type:Sequelize.STRING,
        field: 'to'
    },
    from: {
        type: Sequelize.STRING,
        field: 'from'
    },
    date: {
        type: Sequelize.STRING,
        field: 'date'
    },
    text: {
        type: Sequelize.STRING,
        field: 'text'
    },
    linkId: {
        type: Sequelize.STRING,
        field: 'linkId'
    }
})

module.exports = Message
