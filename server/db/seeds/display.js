/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('display').del()
  await knex('display').insert([
    {
      id: 1,
      school: 'Dev Academy',
      group: 'Group Project',
      complete: 'Complete',
      title: 'ESC',
      description:
        'A virtual escape room that tracks your time through a series of puzzles and mini games',
      route: '/esc',
    },
    {
      id: 2,
      school: 'Dev Academy',
      group: 'Solo Project',
      complete: 'In Progress',
      title: 'Reading Tracker',
      description:
        'An app where you can list and review the books you have read',
      route: '/reading-tracker',
    },
    {
      id: 3,
      school: 'VUW Sonic Arts',
      group: 'Solo Project',
      complete: 'Complete',
      title: 'Effects Controller',
      description:
        'The design and prototype for a French horn effects controller',
      route: '/effects-controller',
    },
    {
      id: 4,
      school: 'VUW Sonic Arts',
      group: 'Solo Project',
      complete: 'Complete',
      title: 'Audio Visualiser',
      description:
        'An audio visualiser that can record, save, and playback sound',
      route: '/audio-visualiser',
    },
  ])
}
