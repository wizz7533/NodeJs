const fs = require('fs').promises;
const path = require('path');

const pathfile = path.join(__dirname, 'assets', 'content', 'asyncawait', 'hello.txt');
const content = 'Hello Async Await\r\n';

(async() => {

    try {
        await fs.mkdir(path.dirname(pathfile), { recursive: true });

        const directory = path.dirname(pathfile);
        const relative = path.relative(__dirname, directory);
        console.log('Les répertoire %s ont bien été créés', relative);

        await fs.writeFile(pathfile, content, { flag: 'a' });
        console.log(`L'écriture dans le fichier \x1b[32m ${path.basename(pathfile)} \x1b[0m est terminée`);

        const resultat = await fs.readFile(pathfile);
        console.log(resultat.toString());
    } catch (e) {
        console.log(e);
    }
})();

// Le premier paramètre d'une callback dans node est toujours l'erreur ( qui est beaucoup plus intéressante que le succès)
// donc on récupère l'erreur, puis on la traite, sinon, succès
// fs.mkdir(path.dirname(pathfile), { recursive: true }).then(_ => {
//     const directory = path.dirname(pathfile);
//     const relative = path.relative(__dirname, directory);

//     console.log('Les répertoire %s ont bien été créés', relative);

//     return fs.writeFile(pathfile, content, { flag: 'a' })
// }).then(_ => {
//     console.log(`L'écriture dans le fichier \x1b[32m ${path.basename(pathfile)} \x1b[0m est terminée`);

//     return fs.readFile(pathfile);
// }).then((resultat) => {
//     console.log(resultat.toString());
// }).catch((err) => {
//     console.log(err);
// });

// fs.mkdir(path.dirname(pathfile), { recursive: true }, (err) => {
//     if (err) {
//         throw err;
//     }

//     console.log('Les répertoire %s ont bien été créés', path.relative(__dirname, path.dirname(pathfile)));

//     // on est obligé d'attendre le retour de la callback (succès) -> création des fichiers avant de pouvoir écrire
//     fs.writeFile(pathfile, content, { flag: 'a' }, (err) => {
//         if (err) throw err;
//         // if success :
//         console.log(`L'écriture dans le fichier \x1b[32m ${path.basename(pathfile)} \x1b[0m est terminée`);
//         // the read and puts
//         fs.readFile(pathfile, (err, content) => {
//             if (err) throw err;

//             console.log(content);
//             console.log('Contenu du fichier: %s', content);
//         });
//     });
// });