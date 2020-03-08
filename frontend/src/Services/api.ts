export default class MovieService {
  getMovies(genre: string): Promise<string[]> {
    return fetch(`https://www.movies.com/${genre}`).then(res => res.json());
  }
}
