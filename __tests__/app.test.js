import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('uploads a new cat via POST', async () => {

  });

  it('gets all public images via GET', async () => {

  });

  it('gets image by id via GET', async () => {

  });

  it('deletes an uploaded image via DELETE', async () => {

  });
});
