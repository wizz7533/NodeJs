function getNumber() {
    // Math.random() [0, 1[
    const randTime = Math.floor(Math.random() * 5000 + 1000); // entre 1s et 5s
    const randError = Math.floor(Math.random() * 3 + 1); // 1/3 de sortir une erreur
    const value = Math.floor(Math.random() * 6 + 1); // entre 1 et 6


    // resolve et reject sont 2 fonction qui vont nous permettre de de résoudre la promesse
    return new Promise((resolve, reject) => {

        // on défini le temps d'attente ( asynchrone) qui sera résolu par randTime ()
        setTimeout(_ => {
            if (randError > 1) {
                resolve(value);
            }
            reject(new Error('Cassé'));
        }, randTime);
    });

}

const objPromise = getNumber();
let resultat = null;

// objPromise.then().catch(); Double promesse à résoudre : then pour la réussite, catch pour l'erreur
// objPromise.then().catch().finaly(); Double promesse à résoudre : then pour la réussite, catch pour l'erreur

objPromise.then((value) => {
    resultat = value;
}).catch((error) => {
    resultat = error.message
}).finally(_ => {
    console.log(`Lancé de dé: ${resultat}`);
});