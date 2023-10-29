'use strict';

const categoriasArray = ['Nike', 'Adidas', 'Puma','Reebok']
const categoriasDB  = categoriasArray.map(categoria => {
  return {
    name : categoria,
    createdAt : new Date,
    updatedAt : new Date,
  }
})
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.bulkInsert('Categories',categoriasDB,
     {}
  );
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('People', null, {});
  }
};
