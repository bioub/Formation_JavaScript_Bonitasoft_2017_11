const assert = require('assert');
const sinon = require('sinon');
const { expect } = require('chai');

const sum = (a, b) => a + b;
const withCallback = (cb) => {
  // DO Something
  cb();
};

describe('hello mocha', () => {
  describe('sum function', () => {
    it('should returns 3 when called with 1 and 2', () => {
      assert.deepEqual(sum(1, 2), 3);
    });

    it('should returns 3 when called with 1 and 2 in bdd', () => {
      expect(sum(1, 2)).to.equal(3);
    });
  });

  describe('async code', () => {
    it('should call function in one second', (done) => {
      setTimeout(() => {
        expect(true).to.equal(true);
        done();
      }, 1000);
    });
  });

  describe('test callback', () => {
    it('should call cb', () => {
      const callback = sinon.spy();
      withCallback(callback);
      expect(callback.calledOnce).to.be.true;
    });
  });
});
