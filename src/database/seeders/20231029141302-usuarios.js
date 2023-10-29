"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Ezequiel",
          surname: "Gomez",
          email: "eze@gmail.com",
          roles_id: 1,
          birthday : null,
          password:
            "$2a$10$xIv6npWZ2gma4XG62PavBu6CItYXfW3jSFzQmEe9myvgnGbU6eaou",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alejandro",
          surname: "Gomez",
          email: "ale@gmail.com",
          roles_id: 2,
          birthday : null,
          password:
            "$2a$10$xIv6npWZ2gma4XG62PavBu6CItYXfW3jSFzQmEe9myvgnGbU6eaou",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
