'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Heroes', [
     {
       name: 'Hulk',
       superpower: 'smiling',
       createdAt: new Date(),
       updatedAt: new Date()
     },
    {
       name: 'Superman',
       superpower: 'Slip au dessus du pantalon',
       createdAt: new Date(),
       updatedAt: new Date()
     },
    {
       name: 'Batman',
       superpower: 'Prendre des coups',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: 'Luc Skywalker',
       superpower: 'Voyager dans l\'espace',
       createdAt: new Date(),
       updatedAt: new Date()
     }

     ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Heroes', null, {});
  }
};
