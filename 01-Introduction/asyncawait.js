// async est un raccourcis vers les promesses
// avec le mot clé return, la promesse est en réussite

async function success() {
    return 'Bravo !';
}

// avec le mot clé throw la promesse st en échec
async function fail() {
    throw new Error('dommage...');
}
success().then(console.log);
fail().catch(console.log);

function getNumber() {
    // Math.random() [0, 1[
    const randTime = Math.floor(Math.random() * 5000 + 1000); // entre 1s et 5s
    const value = Math.floor(Math.random() * 9); // entre 0 et 9



    // resolve et reject sont 2 fonction qui vont nous permettre de de résoudre la promesse
    return new Promise((resolve, reject) => {

        // on défini le temps d'attente ( asynchrone) qui sera résolu par randTime ()
        setTimeout(_ => {
            resolve(value);
        }, randTime);
    });
}

async function addition() {
    const a = await getNumber();
    const b = await getNumber();

    console.log(`${a} + ${b} = ${a+b}`);
}

console.log(`Début de l'addition`);
addition();
console.log(`Fin de l'addition`);

// iife / iify ( Immediately Invoked Function Expression)
(async() => {
    console.log(`Début de l'addition`);
    // destructuration : extraction des données

    try {
        const [a, b] = await Promise.all([getNumber(), getNumber()]);
        console.log(`${a} + ${b} = ${a+b}`);
    } catch (e) {
        console.log(e);
    }
    // const a = await getNumber();
    // const b = await getNumber();

    console.log(`Fin de l'addition`);
})();