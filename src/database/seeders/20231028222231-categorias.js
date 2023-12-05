"use strict";

const categoriasArray = [
  {
    name: "Nike",
    image: "Marca-2.png",
  },
  {
    name: "Adidas",
    image: "Marca-1.png",
  },
  {
    name: "Puma",
    image: "Marca-3.png",
  },
  { name: "Reebok", image: "Marca-5.png" },
];
const categoriasDB = categoriasArray.map((categoria) => {
  return {
    brand: categoria.name,
    image: categoria.image,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
});
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categories", categoriasDB, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
