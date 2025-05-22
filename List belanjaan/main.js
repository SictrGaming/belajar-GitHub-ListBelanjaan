import { Tampilin } from './utils.js';
let listBelanja = ['Tomat','Kelapa','Apel','manggis','Orang'];
console.log("List Belanja : ");
listBelanja.forEach(belanjaan => { 
    try {
    console.log(Tampilin(belanjaan));
} catch (error) {
    console.log(error.message);
}
});