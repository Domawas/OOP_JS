export default class Ember {

    #szulIdo;
    #kor;
    #nev
    constructor(nev, szulIdo, magassag, szuloElem){
        /* beállitjja az osszes adattagot */
        this.#nev=nev
        this.#szulIdo=szulIdo 
        this.magassag=magassag
        this.szuloElem=szuloElem
        this.getKor()
        console.log(this.#kor)
    }

    negjelenit(){
        let html=`
        <div class="ember">
            <h2>${this.#nev}</h2>
            <p>${this.#kor}</p>
            <p>${this.magassag}</p>

        </div>
        `
        this.szuloElem.innerHTML+=html
        console.log(html)
    }

    setNev(nev){
        this.#nev = nev
    }

    getNev(){
        return this.#nev
    }

    getKor(){
        const d = newDate()
        let year = d.getFullYear()
        this.#kor = year - this.#szulIdo
        return this.#kor
    }

    

}