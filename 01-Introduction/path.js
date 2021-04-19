const path = require('path');

const file = './assets/content/hello.txt';

console.log(path);

console.log(file);

console.log('dirname(): %s', path.dirname(file));
console.log('basename(); %s', path.basename(file));
console.log('extname(); %s', path.extname(file));
console.log('Séparateur système: %s', path.sep);

const image = path.join('.', 'assets', 'images', 'images.png');

console.log('Construire un chemin: %s', image);

// chemin relatif d'un répertoire
console.log('Répertoire: %s', path.join(path.dirname(file), path.sep));

// chemin absolu du même répertoire
console.log('Répertoire: %s', path.join(__dirname, path.dirname(file), path.sep));

// changement de répertoire à travers node
const dir_file = path.join(path.dirname(file), path.sep);
const dir_image = path.join(path.dirname(image), path.sep);
const relative = path.relative(dir_file, dir_image)
console.log(`Pour passer du dossier ${dir_file} au dossier ${dir_image}, je dois daire ${relative}`);

// donner le véritable chemin
console.log(path.join(__dirname, dir_file, relative));
console.log(path.resolve(__dirname, dir_file, relative));