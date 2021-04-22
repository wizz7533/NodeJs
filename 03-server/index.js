import http from 'http';
import fs from 'fs/promises';
import path from 'path';
import mime from 'mime-types';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer();

server.on('request', async (request, response) => {

  const page = new URL(request.url, `http://${request.headers.host}`).pathname;
  console.log(`Request: ${page}`);

  let html = null;
  let content = null;
  response.setHeader('Content-Type', 'text/html;charset=utf-8');

  switch(page){
    case '/':

      html = `<!doctype html>
      <html>
        <head>
          <title>Server Node</title>
          <meta charset="utf-8"</meta>
        </head>
        <body>
          <h1>Accueil</h1>
            <nav>
              <a href="/">Accueil</a>
              <a href="/about">About</a>
            </nav>
            <img src="public/images/star.svg" width="25em" alt="logo star" />
        </body>
      </html>`;

      break;

    case '/about':

      html = `<!doctype html>
      <html>
        <head>
          <title>Server Node</title>
          <meta charset="utf-8"</meta>
        </head>
        <body>
          <h1>About</h1>
            <nav>
              <a href="/">Accueil</a>
              <a href="/about">About</a>
            </nav>
            <img src="public/images/star.svg" width="25em" alt="logo star" />
        </body>
      </html>`;
      break;
    default:
      try {
        const ressource = path.join(__dirname, page);
        const extension = path.extname(ressource);
        content = await fs.readFile(ressource);
        response.setHeader('Content-Type', mime.lookup(extension) || 'text/plain');
        // response.end(content);
        // return;
      } catch(e) {
        console.log(e);
        response.statusCode = 404;
        html = '<h1>404 - Not Found</h1>';
      }
  }
    response.end(html || content);
});


const port = process.env.PORT || 3000;

server.listen(port);

console.log(`Personal Node Server is listening on http://localhost:${port}`);
console.log('Shutdown Node Server with CRTL + C');
