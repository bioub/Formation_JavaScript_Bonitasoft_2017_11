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
  const contact = await service.findById(req.params.id);
  res.json(contact);
};

exports.update = async (req, res, next) => {

};

exports.remove = async (req, res, next) => {

};

