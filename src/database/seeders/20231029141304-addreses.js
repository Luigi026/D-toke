"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Addresses",
      [
        {
          address: "Zurdasia 999",
          city: "SAN MIGUEL",
          province: "Buenos Aires",
          users_id:1,
          createdAt : new Date,
          updatedAt : new Date,
        },
        {
          address: "Zurdocity 333",
          city: "SAN MIGUEL",
          province: "Buenos Aires",
          users_id:2,
          createdAt : new Date,
          updatedAt : new Date,
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Addresses", null, {});
  },
};
