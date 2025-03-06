import Ember from "./Ember.js";
import { EMBEREKLISTA } from "./adat.js";
let articleElem=document.querySelector("article")

for(let i; i<EMBEREKLISTA.length; i++){
    const EMBER=new Ember(EMBEREKLISTA[i].nev)

}


console.log(EMBER1.nev,EMBER1.kor,EMBER1.magassag)
console.log(EMBER1.getKor())

