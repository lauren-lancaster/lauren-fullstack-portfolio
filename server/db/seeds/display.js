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
      github: '',
      url: '',
      created_at: '',
      tech: '',
      full_description: '',
      reflections: '',
    },
    {
      id: 2,
      school: 'Dev Academy',
      group: 'Solo Project',
      complete: 'In Progress',
      title: 'Reading Tracker',
      description:
        'An app where you can list and review the books you have read',
      github: '',
      url: '',
      created_at: '',
      tech: '',
      full_description: '',
      reflections: '',
    },
    {
      id: 3,
      school: 'VUW Sonic Arts',
      group: 'Solo Project',
      complete: 'Complete',
      title: 'Effects Controller',
      description:
        'The design and prototype for a French horn effects controller',
      github: '',
      url: '',
      created_at: '',
      tech: '',
      full_description: '',
      reflections: '',
    },
    {
      id: 4,
      school: 'VUW Sonic Arts',
      group: 'Solo Project',
      complete: 'Complete',
      title: 'Audio Visualiser',
      description:
        'An audio visualiser that can record, save, and playback sound',
      github: '',
      url: '',
      created_at: '',
      tech: '',
      full_description: '',
      reflections: '',
    },
  ])
}
