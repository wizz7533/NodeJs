import models from '../models';

class HeroeController {

  async index(req, res) {

    const heroes = await models.Heroe.findAll();
    res.json(heroes);

  }

  async detail(req, res) {
    //findByPk
    const id = req.params.id;
    const heroe = await models.Heroe.findByPk(id);

    if(!heroe) {
      res.status(404).json({ 'message': `La ressource n'existe pas` });
      return;
    }

    res.json(heroe);
  }

  async delete(req, res) {

    const id = req.params.id;
    await models.Heroe.destroy({ where: {id}});
    res.status(204).json();

  }

  async add(req, res) {
    const body = req.body;

    try {
      const heroe = await models.Heroe.create( body );
      res.status(201).json(heroe);
    } catch(e) {
      res.status(400).json({message: e.message});

    }
  }

  async update(req, res){
    const body = req.body;
    const id = req.params.id;
        try {
      await models.Heroe.update( body, { where: {id}} );
      res.status(204).json();
    } catch(e) {
      res.status(400).json({message: e.message});

    }
  }
}

export default new HeroeController();
