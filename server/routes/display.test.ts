import { describe, it, expect, beforeEach, vi } from 'vitest'
import request from 'supertest'
import server from '../server'
import * as db from '../db/display'

describe('test environment working', () => {
  it('works as expected', () => {
    expect.assertions(4)
    expect(true).toBeTruthy()
    expect(1 + 1).toBe(2)
    expect('hello').toBeTypeOf('string')
    expect([1, 2, 3]).toHaveLength(3)
  })
})

//TODO:
//make a model for mock data and test routes using it
