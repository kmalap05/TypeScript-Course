// Interface with Interface
interface MovieDetails {
  readonly name: string;
  rating: number;
  printMovieInfo(name: string, price: number, rating: number): string | number;
}

interface MovieGenre extends MovieDetails {
  genre: string;
}

const movie1: MovieGenre = {
  name: "Star Wars",
  rating: 8.9,
  genre: "Action",
  printMovieInfo(name: string, price: number, rating: number): string | number {
    return `Movie Name: ${name} Price: ${price} Rating: ${rating}`;
  },
};

console.log(movie1.printMovieInfo("John Wick", 100, 8));
