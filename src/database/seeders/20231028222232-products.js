'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Product', [
    {
      name: "Adidas",
      description: "Multix Bordo",
      image: null,
      category: "Adidas",
      colors: [
        "Bordo",
        "Negro",
        "Blanco"
      ],
      price: 59000,
      tallas: [
        "US 7",
        "US 8",
        "US 9"
      ],
      createdAt : new Date,
      updatedAt : new Date,
    },
    {
      name: "Puma",
      description: "Zapatilla Puma RsX Triple Unisex.",
      image: null,
      category: "Puma",
      colors: [
        "Rojo",
        "Negro",
        "Blanco"
      ],
      price: 39000,
      tallas: [
        "US 7",
        "US 8",
        "US 9"
      ],
      createdAt : new Date,
      updatedAt : new Date,
    },
    {
      name: "Nike",
      description: "Zapatilla Nike Revolution 6 Next Nature",
      image: null,
      category: "Nike",
      colors: [
        "Rojo",
        "Negro",
        "Blanco"
      ],
      price: 69000,
      tallas: [
        "US 7",
        "US 8",
        "US 9"
      ],
      createdAt : new Date,
      updatedAt : new Date,
    },

  ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Product', null, {});
  }
};
