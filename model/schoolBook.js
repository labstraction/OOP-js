class SchoolBook extends Book{

    constructor(title, author, dop, publisher, subject, grade){
        super(title, author, dop, publisher);
        this.subject = subject;
        this.grade = grade;
    }

    toString(){
        const card = super.toString() + 
                     'Materia: ' + this.subject + '\n' +
                     'Classe: ' + this.grade + '\n';
                     
        return card;
    }

}