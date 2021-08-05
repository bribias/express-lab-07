import { Router } from 'express';
import Cat from '../model/Cat';
import Cat from '../model/Cat';
import CatService from '../services/CatService';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const randomCats = await CatService.generateCat(req.body);
      res.send(randomCats);
    } catch (err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const randomCats = await Cat.getAll();
      res.send(randomCats);
    } catch (err) {
      next(err);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const randomCat = await Cat.getById(id);
      res.send(randomCat);
    } catch (err) {
      next(err);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const { breed } = req.body;
      const updatedCat = await CatService.updatedCat(id, breed);

      res.send(updatedCat);
    } catch (err) {
      next(err);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      await Cat.deleteById(id);

      res.send({ message: 'The cat does not exist' });
    } catch (err) {
      next(err);
    }
  });
