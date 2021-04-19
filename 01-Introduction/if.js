function hello(bool) {
    // if(bool) {
    //     return 'vrai'
    // } else {
    //     return 'faux'
    // }

    if (bool) {
        return 'vrai'; // throw ( on soulève l'exception afin qu'elle soit gérée plus tard soit par le dev soit par la gestion des erreurs système)  try{ } catch(e){ }
    }
    return 'faux';
}

console.log(hello(true));

const day = 10;
// ok
if (d % 2 == 0) {

}

// better
// Yoda code
if (0 == d % 2) {

}

/** Porquoi le Yoda code
 * démontration en java:
 * 
 * String c = null;
 * 
 * c.equal("coucou"); //error
 * 
 * "coucou".equal(c);
 * 
 */