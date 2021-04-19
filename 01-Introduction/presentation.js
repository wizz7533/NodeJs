console.log('Hello Node');

const firstname = 'John';
const lastname = 'Doe';
const age = 48;

console.log('Hello %s %s (%d ans) comment allez vous?', firstname, lastname, age);

/**
 * %s permet d'afficher des chaines de caractères
 * %d permet d'afficher les valeurs numériques
 * %j permet d'afficher des structures JSON
 * %O Affiche un objet avec au maximun 4 profondeurs
 * %o Affiche un objet avec au maximun 2 profondeurs
 */

console.log(`Hello ${firstname}, ${lastname}`);


// rendle chemin absolu du filename et du dirname
console.log(`__filename: ${__filename}`);
console.log(`__dirname: ${__dirname}`);

// les fonctions qui existent dans javascript exiestent dans nodejs

// 01- la call back
// _ remplace les () vides, sans argument
setTimeout(() => {
    console.log('je suis exécuté après 1000 ms');
}, 1000);

// _ remplace les () vides, sans argument
const timer = 1000;
setTimeout(_ => {
    console.log('je suis exécuté après %d ms', timer);
}, timer);

// doc node 14,x : https://nodejs.org/dist/latest-v14.x/docs/api/

// process
//console.log(process);
console.log(process.argv);

const argv = process.argv.slice(2);

if (argv.includes('--version')) {
    console.log('1.0.0');
    process.exit();
}