class Book extends Publication{

    constructor(title, author, dop, publisher){
        super(title, dop, publisher);
        this.author = author;
    }

    toString(){
        const card = super.toString() +
                     'Autore: ' + this.author + '\n';
        return card;
    }

}

