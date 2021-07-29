import { Router } from 'express';
import Cats from '../model/Cat';
import CatService from '../services/CatService';

export default Router()
  .post('/', async (req, res, next) => {
    try {

    } catch (err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try {

    } catch (err) {
      next(err);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {

    } catch (err) {
      next(err);
    }
  })
  .poputst('/:id', async (req, res, next) => {
    try {

    } catch (err) {
      next(err);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {

    } catch (err) {
      next(err);
    }
  });