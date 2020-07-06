import moment from 'moment'
import { User } from './User'

export class Student implements User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public birthDate: moment.Moment,
        public hobbies: string[]

    ) {}

    public getAge() {
        return moment().diff(this.birthDate, "years")
    }
}

export const student1 = new Student( 
     "1", "Joaozinho", "joaozinho@gmail.com", moment("24/12/1994", "DD/MM/YYYY"),["Ler", "Assistir filmes"] 
    )
export const student2 = new Student( 
     "1", "Zezinho", "zezinho@gmail.com", moment("03/05/1991", "DD/MM/YYYY"),["Ouvir músicas", "Assistir series"] 
    )
export const student3 = new Student( 
     "1", "Marquinhos", "marquinho@gmail.com", moment("27/11/1994", "DD/MM/YYYY"),["Jogar futebol", "Assistir filmes"] 
    )
export const student4 = new Student( 
     "1", "Luizinho", "luizinho@gmail.com", moment("23/02/1994", "DD/MM/YYYY"),["Jogar basquete", "Assistir series"] 
    )