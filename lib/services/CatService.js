import request from 'superagent';

export default class CatService {
    
  static async generateCat({ randomCat }) {
    const randCat = '';
    for (let i = 0; i < Number(randomCat); i++) {
      const data = await request.get('https://api.thecatapi.com/v1/images/search');
    }
  }
}
