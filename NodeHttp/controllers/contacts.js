const service = require('../models/contact');

exports.list = async (req, res, next) => {
  const contacts = await service.findAll();
  res.json(contacts);
};

exports.add = async (req, res, next) => {
  const contact = await service.create(req.body);
  res.json(contact);
};

exports.show = async (req, res, next) => {
  try {
    const contact = await service.findById(req.params.id);

    if (!contact) {
      return next(); // 404
    }

    res.json(contact);
  }
  catch (err) {
    next(err); // 500
  }
};

exports.update = async (req, res, next) => {
  req.body.id = Number(req.params.id);
  const contact = await service.update(req.body);
  res.json(contact);
};

exports.remove = async (req, res, next) => {
  const contact = await service.removeById(req.params.id);
  res.json(contact);
};

