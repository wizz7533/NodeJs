class HomeController {

  index(req, res) {

    res.render('home/index.html');

  }

  about (req, res) {
    const name = req.params.name;
    res.render('home/about.html', { name }); // { name : name }
  }
}

export default new HomeController();
