// ==========================================
// Opdracht 1. Maak een for-loop die 3 keer "Hoera!" in de terminal logt
// Verwachte uitkomsten:
// Hoera!
// Hoera!
// Hoera!
// ==========================================


const names = [
    {
        lastName: 'Verhoeven',
        firstName: 'Yvet',
        age: 41,
    }

    ]

const providedLastName= 'Verhoeven';
const providedFirstName= 'Yvet';
const providedAge= 41;

for (let i = 0; i <names.length; i++) {

if (providedLastName === names[i].lastName){
    console.log('hoera');
}
    if (providedFirstName === names[i].firstName) {
        console.log(`Hoera`);
}
        if (providedAge=== names[i].age) {
            console.log (`Hoera`);
}

}

// ==========================================
// Opdracht 2. Maak een for-loop die 4 keer het woord "loop..." logt, en bij de vijfde loop het woord "klaar!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!
 // ==========================================

const loopsFourTimesReady = [
    {
        firstLoop: 'Heibloem',
        secondLoop: 'Party',
        thirdLoop: 40,
        fourthLoop: 'John',
        fifthLoop: 'Shopping'

    }
]

const village = 'Heibloem';
const dancing = 'Party';
const age = 40;
const beautifulSun = 'John';
const loving = 'Shopping';

for (let i = 0; i < loopsFourTimesReady.length; i++) {

    if (village === loopsFourTimesReady[i].firstLoop) {
        console.log("Loop")
    }

    if (dancing === loopsFourTimesReady[i].secondLoop) {
        console.log("Loop")
    }

    if (age === loopsFourTimesReady[i].thirdLoop) {
        console.log("Loop")
    }

    if (beautifulSun === loopsFourTimesReady[i].fourthLoop) {
        console.log("Loop")
    }

    if (loving === loopsFourTimesReady[i].fifthLoop) {
        console.log("Klaar!")
    }
}


// ==========================================
// Opdracht 3. Maak een for-loop die van 0 tot 15 loopt. Voor ieder getal wordt in de console gelogd of het getal even of oneven is.
// Verwachte uitkomsten:
// 0 is even
// 1 is oneven
// 2 is even
// 3 is oneven
// .... etc.
// 15 is oneven

// Tip: een getal is oneven als je het door 2 deelt en er blijft nog iets over. Een getal is even als je het deelt door 2 en er blijft niets over..
// ==========================================



// ==========================================
// [BONUSOPDRACHT] - optioneel: maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan, en vanaf het getal 6 komt er >> voor ieder getal te staan.
// Verwachte uitkomsten:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 8
// >> 9
// ==========================================

