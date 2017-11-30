const contacts = [{
  prenom: 'Steve',
  nom: 'Jobs',
  id: 123,
}, {
  prenom: 'Bill',
  nom: 'Gates',
  id: 456,
}];

exports.findAll = () => Promise.resolve(contacts);
exports.findById = (id) => Promise.resolve(contacts.find(c => c.id === Number(id)));
exports.create = (contact) => {
  contact.id = contacts.reduce((acc, c) => (c.id > acc) ? c.id : acc, 0) + 1;
  contacts.push(contact);
  return Promise.resolve(contact);
};
