const fs = require('fs-extra');
const path = require('path');
const del = require('del');
const md5 = require('md5');
const UglifyJS = require('uglify-es');

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

// Exercice Build
// Ecrire un script de build dans le style de votre choix
// (synchrone, asynchrone, promise, async/await)

// Etapes


// 1 - Supprimer le dossier dist (s'il existe)
// vous pouvez utiliser del (pas besoin de vérifier qu'il existe)
// https://github.com/sindresorhus/del
async function removeDist() {
  await del(distPath);
  console.log(`${distPath} removed`);
}

// 2 - Créer le dossier dist
async function createDist() {
  await fs.mkdir(distPath);
  console.log(`${distPath} created`);
}

// 3 - Copier le contenu des fichiers src/js/horloge.js
// et src/js/index.js dans un fichier dist/app.js
async function buildJS() {
  const buffers = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  let content = '';
  for (let b of buffers) {
    content += b.toString();
  }
  content = UglifyJS.minify(content).code;

  await fs.appendFile(appJsDistPath, content);

  console.log(`${appJsDistPath} created`);
}

// 4 - Copier le fichier src/index.html dans dist/index.html
// en remplaçant les balises script de dev
// par celle de prod (app.js)
// readFile retourne un Buffer
// Buffer -> string : buffer.toString()
async function buildHTML() {
  const buffer = await fs.readFile(indexHtmlPath);
  let content = buffer.toString();
  content = content.replace(/<script[\s\S]*<\/script>/i, '<script src="app.js"></script>');
  await fs.appendFile(indexHtmlDistPath, content);
  console.log(`${indexHtmlDistPath} created`);
}

async function build() {
  await removeDist();
  await createDist();

  await Promise.all([
    buildJS(),
    buildHTML(),
  ]);

  console.log('Build done');
}

build();

// 5 - Optionnel
// Utiliser la bibliothèque uglify-es
// pour réduire le poids du fichier js de prod

// 6 - Optionnel
// Utiliser le module md5 pour signer
// le fichier app.js et remplacer son nom
// par le checksum md5 (pour invalider le cache)
// app.F4556Y4G445G454G.js

// Note :
// Faire un npm install
// serveur de dev -> npm run serve:dev
// serveur de prod -> npm run serve:prod

