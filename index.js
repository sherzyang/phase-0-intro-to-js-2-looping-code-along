
let names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, occassion = "birthday") {
    let newCards = []
    for ( let i =0; i < names.length; i++) {
        newCards.push(`Thank you, ${names[i]}, for the wonderful ${occassion} gift!`);
    }
    return newCards;
}

writeCards(names, occassion);

function countDown(number) {
    while (number >= 0) {
        console.log(number--);
    }
}