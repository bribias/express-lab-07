import pool from '../utils/pool';

// insert, getAll, getById, deleteById
export default class Cat {
  id;
  breed;
  image;

  constructor(row) {
    this.id = row.id;
    this.breed = row.spread;
    this.image = row.image;
  }
  static async insert({ breed, image }) {
    const { rows } = await pool.query(
      'INSERT INTO cats (breed, image) VALUES ($1, $2) RETURNING *',
      [breed, image]
    );
    return new Cat(rows[0]);
  }
  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM cats WHERE id=$1', [id]);
    return new Cat(rows[0]);
  }
  static async getAll() {
    const { rows } = await pool.query('ISELECT * FROM cats');
    return rows.map((row) => new Cat(row));
  }
  static async updateById(id, { breed, image }) {
    const existingCat = await Cat.getById(id);
    const newBreed = breed ?? existingCat.breed;
    const newImage = image ?? existingCat.image;

    const { rows } = await pool.query(
      'UPDATE cats SET breed=$1, image=$2 WHERE id=$3 RETURNING *',
      [newBreed, newImage, id]
    );
    return new Cat(rows[0]);
  }
  static async deleteById(id) {
    const { rows } = await pool.query(
      'DELETE FROM cats WHERE id=$1 RETURNING *',
      [id]
    );
    return new Cat(rows[0]);
  }
}
