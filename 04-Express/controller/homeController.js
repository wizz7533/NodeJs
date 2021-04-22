class HomeController {

  index(req, res) {

    res.render('home/index.html');

  }
}

export default new HomeController();
