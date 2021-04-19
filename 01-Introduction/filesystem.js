const fs = require('fs');
const path = require('path');

const pathfile = path.join(__dirname, 'assets', 'content', 'hello.txt');
const content = 'Hello World\r\n';


// Le premier paramètre d'une callback dans node est toujours l'erreur ( qui est beaucoup plus intéressante que le succès)
// donc on récupère l'erreur, puis on la traite, sinon, succès
fs.mkdir(path.dirname(pathfile), { recursive: true }, (err) => {
    if (err) {
        throw err;
    }

    console.log('Les répertoire %s ont bien été créés', path.relative(__dirname, path.dirname(pathfile)));

    // on est obligé d'attendre le retour de la callback (succès) -> création des fichiers avant de pouvoir écrire
    fs.writeFile(pathfile, content, { flag: 'a' }, (err) => {
        if (err) throw err;
        // if success :
        console.log(`L'écriture dans le fichier \x1b[32m ${path.basename(pathfile)} \x1b[0m est terminée`);
        // the read and puts
        fs.readFile(pathfile, (err, content) => {
            if (err) throw err;

            console.log(content);
            console.log('Contenu du fichier: %s', content);
        });
    });
});