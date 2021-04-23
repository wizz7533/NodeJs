import jwt from 'jsonwebtoken';

export default function isAuthenticated(req, res, next) {
  //authorization: token type Bearer => Bearer ... token ...

  if (undefined !== req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];

    try {
      let payload = jwt.verify(token, 'commentestvotreblanquette', { algorithm: 'HS512'});
      next();
      return;
    } catch(e){}

  } else {
    res.status(401).json({message : `Erreur d'authentification`});
  }


}
