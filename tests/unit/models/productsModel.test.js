const { describe } = require('mocha');

const { expect } = require('chai');

const sinon = require('sinon');

const conec = require('../../../models/connection');
const productsModel = require('../../../models/productsModel');

describe('Testes da camada productsModel', () => {

  describe('Verifica se retorna todos os produtos', () => {

    it('Verifica se retorna um array', async () => {
      const result = await productsModel.getAll()
      expect(result).to.be.a('array')
    });

    it('Verifica se o array não está vazio', async () => {
      const result = await productsModel.getAll()
      expect(result).to.be.not.empty
    });
  });
});
