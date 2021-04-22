import express from 'express';
import helmet from 'helmet';
import path from 'path';
import favicon from 'serve-favicon';
import nunjucks from 'nunjucks';

const app = express();
nunjucks.configure( path.join(__dirname, 'template'), {
  autoescape: true, // evite les injections xss
  express: app
});

// middleware ( use() )
//helmet va être un intermédiaire dans la
app.use(helmet());
app.use((req, res, next) => {
  console.log(`Request: ${req.url}`);
  next();
});
app.use( express.static(path.join(__dirname, 'public')));
app.use( favicon(path.join(__dirname, 'public', 'favicon-32x32.png')));

app.get('/', (req, res) => {
  let html = `<h1>Accueil</h1>
  <img src="images/star.svg" width="25em" alt="logo star">`;
  res.send(html);
})

const port = process.env.PORT || 3200;
app.listen(port, 'localhost', () => {
  console.log(`Personal Node Server is listening on http://localhost:${port}`);
  console.log('Shutdown Node Server with CRTL + C');
})
