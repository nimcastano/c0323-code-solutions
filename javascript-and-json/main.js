const books = [
  {
    isbn: '123143234143488',
    title: 'Loop de Loop',
    author: 'Mr. Looper'
  },
  {
    isbn: '59286255023',
    title: 'Straight Lines Only',
    author: 'Curvy Curvester'
  },
  {
    isbn: '039443344526',
    title: 'Big Balloons',
    author: 'Flyn Flyer'
  }
];

console.log('books array: ', books);
console.log('typeof books: ', typeof books);

const jsonBooks = JSON.stringify(books);
console.log('json books: ', jsonBooks);
console.log('json books typeof: ', typeof jsonBooks);

const jsonStudent = '{"Number id": 235024, "name": "Greg"}';

console.log('json student: ', jsonStudent);
console.log('json student parsed: ', JSON.parse(jsonStudent));
console.log('json student parsed typeof: ', typeof JSON.parse(jsonStudent));
