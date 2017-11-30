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
exports.findById = id => Promise.resolve(contacts.find(c => c.id === Number(id)));
exports.create = contact => {
  contact.id = contacts.reduce((acc, c) => (c.id > acc) ? c.id : acc, 0) + 1;
  contacts.push(contact);
  return Promise.resolve(contact);
};
exports.update = contact => {
  const contactToUpdate = contacts.find(c => c.id === Number(contact.id));
  const index = contacts.indexOf(contactToUpdate);

  contacts[index] = contact;

  return Promise.resolve(contact);
};
exports.removeById = id => {
  const contact = contacts.find(c => c.id === Number(id));
  const index = contacts.indexOf(contact);

  contacts.splice(index, 1);

  return contact;
};
