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

  describe('Verifica se retorna ID do produto pesquisado', () => {
    const idMock = 1

    const idMockProduct = [{
      id: 1,
      name: "Martelo de Thor",
    }];

    it('Verifica se retorna um array', async () => {
      const result = await productsModel.findById(idMock)
      expect(result).to.be.a('array')
    })

    it('Verifica se o array não está vazio', async () => {
      const result = await productsModel.findById(idMock)
      expect(result).to.be.not.empty
    })

    it('Verifica se retorna o "Martelo do Thor"', async () => {
      const result = await productsModel.findById(idMock)
      expect(result).to.deep.equal(idMockProduct)
    })
  });

  describe('Verifica se é possível adicionar um produto novo', () => {
    const newProduct = 'Armadilha Venenosa'
    it('Verifica se retorna um objeto', async () => {
      const result = await productsModel.addProduct(newProduct)
      expect(result).to.be.a('object')
    });
  });
});
