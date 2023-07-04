

// // const book1 = {
// //     title: 'iliade',
// //     author: 'omero',
// //     dop: '27/12/2009',
// //     publisher: 'einaudi'
// // }

// const book2 = new Book('odissea', 'omero', '27/12/2010', 'einaudi');

// const book3 = new Book('la divina commedia', 'dante', '27/02/1998', 'feltrinelli')


// // console.log(book1);
// // console.log(book2);

// // console.log(book1.title);
// // console.log(book2.title);

// // console.log(book1['author']);
// // console.log(book2['author']);


// // function getBookCard(book){
// //     const card = 'Titolo: ' + book.title + '\n' +
// //                  'Autore: ' + book.author + '\n' +
// //                  'Data di pubblicazione: ' + book.dop + '\n' +
// //                  'Casa editrice: ' + book.publisher + '\n';
// //     return card;
// // }

// // console.log(getBookCard(book1));

// // console.log(book2.toString());
// // console.log(book3 + '');


// // console.log(book3.getUpperTitle())


// const magazine1 = new Magazine('opera oggi', '12/6/2023', 'fabbri', 23);

// // console.log(magazine1.toString());

// // console.log(magazine1.getUpperTitle())

// // CLASSE ASTRATTA----------------

// // const pub1 = new Publication('pubblicazione1', '12/6/2020', 'fabbri');

// // console.log(pub1.toString());

// // console.log(pub1.getUpperTitle())

// const schoolB1 = new SchoolBook('matematicando', 'daniele petrelli', '23/4/2013', 'la scuola', 'matematica', 'terza media');
//                                                                     // ['23', '3', '2013']
//                                                                     // y => parseInt(a[2])                      
// // console.log(schoolB1.toString());

// // console.log(schoolB1.getUpperTitle())


// // const libraryCollection = [book2, book3, magazine1, schoolB1];

// // for (const pub of libraryCollection) {
// //     console.log(pub.toString())
// // }


// const library1 = new Library([book2, book3, magazine1, schoolB1]);

// library1.deletePublication(3);

// const book4 = new Book('se questo è un uomo', 'primo levi', '12/05/1998', 'adephi');

// library1.addPublication(book4);

// console.log(library1);

const gui = new GUI();

gui.start();