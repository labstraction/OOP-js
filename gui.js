class GUI {

    constructor() {

        this.storage = new Storage();
        this.library = new Library()
        const data = this.storage.loadData();
        if (data !== null) {
            this.library.fromDbObjects(data);
        }
        
    }

    start() {
        while (true) {

            const firstChoice = prompt(
                    "Hai 4 opzioni:\n" +
                    "1)Guarda la lista dei libri\n" +
                    "2)Aggiungi un libro\n" +
                    "3)Rimuovi un libro\n" +
                    "4)Esci dal programma\n" +
                    "Inserisci il numero dell'operazione"
            );

            if (firstChoice === "1") {
                this.showBooks();
            } else if (firstChoice === "2") {
                this.insertBook();
            } else if (firstChoice === "3") {
                this.deleteBook();
            } else if (firstChoice === "4") {
                break;
            } else {
                alert("hai sbagliato ad inserire l'opzione");
            }
        }
    }


    insertBook(){

        const title = prompt('Inserisci il titolo');
        const author = prompt('Inserisci l\'autore');
        const dop = prompt('Inserisci la data di pubblicazione nel formato gg/mm/aaaa');
        const publisher = prompt('Inserisci la casa editrice');

        const book = new Book(title, author, dop, publisher);

        this.library.addPublication(book);

        this.storage.saveData(this.library.publications);
    }


    showBooks(){

        const allBooks = this.library.getAllBookCards();

        alert(allBooks);

    }

    deleteBook(){

        const humanIndex = prompt('Inserisci il numero del libro da eliminare');
        const index = humanIndex - 1;
        this.library.deletePublication(index);

        this.storage.saveData(this.library.publications);

    }



}
