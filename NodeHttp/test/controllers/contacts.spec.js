const sinon = require('sinon');
const { expect } = require('chai');
const { show } = require('../../controllers/contacts');
const service = require('../../models/contact');

describe('contact controller', () => {
  describe('method show', () => {
    it('should call res.json', async () => {
      const req = {
        params: {
          id: '12345'
        }
      };
      const res = {
        json: sinon.spy(),
      };

      const obj = {
        prenom: 'Toto',
        nom: 'Titi',
        id: 12345
      };
      service.findById = sinon.stub();
      service.findById.returns(obj);

      await show(req, res);
      expect(service.findById.calledWith(req.params.id)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
      expect(res.json.calledWith(obj)).to.be.true;
    });
  });
});
