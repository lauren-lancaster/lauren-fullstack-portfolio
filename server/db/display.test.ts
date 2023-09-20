import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest'
import connection from './connection'
import * as projects from './display'

beforeAll(async () => {
  await connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

afterAll(async () => {
  await connection.migrate.rollback()
  await connection.destroy()
})

describe('test environment working', () => {
  it('works as expected', () => {
    expect.assertions(4)
    expect(true).toBeTruthy()
    expect(1 + 1).toBe(2)
    expect('hello').toBeTypeOf('string')
    expect([1, 2, 3]).toHaveLength(3)
  })
})

describe('display db', () => {
  it('Retrieves all projects', async () => {
    expect.assertions(2)
    const result = await projects.getProjects()

    expect(result).toHaveLength(4)
    expect(result[1]).toStrictEqual({
      id: 2,
      school: 'Dev Academy',
      group: 'Solo Project',
      complete: 'In Progress',
      title: 'Reading Tracker',
      description:
        'An app where you can list and review the books you have read',
      github: 'https://github.com/lauren-lancaster/my-fullstack-collection',
      url: 'http://lauren-book-collection.devacademy.nz/',
      created_at: '2023',
      tech: 'Typescript, Javascript, React, Redux, SQLite3, Knex, SCSS',
      full_description:
        'This is a website that allows you to view information on books you have read, as well as your rating and review of them. You can also add, update and delete the books. This project is still in progress. In future users will be able to click on the individual book cards and be taken to a new webpage with more detailed information. I also want to add authentication so users can log in to add their own books.',
      reflections:
        "The reading tracker was my second solo project at Dev Academy. Most work at Dev is done in pairs. At this stage in my learning I had been working in fullstack for less than a week, so this project was a way for me to teach myself how to connect the back end to the front end. Working on such new content individually was a challenge, especially because I fell sick this week and had to switch to working from home, however during the foundations part of Dev Academy I had built some strong working habits for working at home so the switch back wasn't too difficult. I wrote down my thoughts and reflections as I went and stayed in regular contact with the Dev Academy facilitators. Because I was working by myself all the areas of new knowledge I hadn't quite cemented became very obvious and I was able to quickly identify which areas needed a bit of deeper learning. The project was slow going, hence why it is yet to be completed, but I had a lot of fun learning new things throughout it and future projects were much easier because I had spent the time on it first.",
    })
  })
})
