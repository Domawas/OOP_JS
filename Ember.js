export default class Ember {

    #szulIdo;
    #kor;
    constructor(nev, szulIdo, magassag){
        /* beállitjja az osszes adattagot */
        this.nev=nev
        this.#szulIdo=szulIdo 
        this.magassag=magassag
        this.getKor()
        console.log(this.#kor)
    }

    getKor(){
        const d = newDate()
        let year = d.getFullYear()
        this.#kor = year - this.#szulIdo
        return this.#kor
    }

    

}