import { Sequelize } from 'sequelize';

const dataBase = new Sequelize('crud_full_stack', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export {
    dataBase
} 