const { describe } = require("mocha");
const { expect } = require("chai");
const sinon = require("sinon");

const productsController = require('../../../controllers/productsController')

describe('03 - Controllers Tests - camada productsControllers', () => {

  describe('1 - Verifica se getAll retorna todos os produtos', () => {
    const response = {}
    const request = {}

    before(() => {
      response.status = sinon.stub().returns(response)
      response.json = sinon.stub().returns()
    });

    it('Retorna status 200 OK', async () => {
      await productsController.getAll(request, response)
      expect(response.status.calledWith(200)).to.be.equal(true)
    });
  });

  describe('2 - Tratamento de erro do getAll', () => {
    const response = {};
    const request = {};
    const ERROR_MSG = { message: "Product not found" }

    before(() => {
      request.params = { id: 666 }
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(ERROR_MSG);
    });

    it(' se os params forem inválidos, o request retorna o erro 404', async () => {
      await productsController.findById(request, response)
      expect(response.status.calledWith(404)).to.be.equal(true)
    });

    it(' se os params forem inválidos retorna o erro "product not found"', async () => {
      await productsController.findById(request, response)
      expect(
        response.json.calledWith(ERROR_MSG)
      ).to.be.equal(true);
    });
  });

  describe('3 - Verifica o getById', () => {
    const response = {};
    const request = {};

    const expectResult = {
      id: 2,
      name: "Traje de encolhimento",
    };

    before(() => {
      request.params = { id: 2 }
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(expectResult);
    });

    it(' retorna o status 200 OK', async () => {
      await productsController.findById(request, response)
      expect(response.status.calledWith(200)).to.be.equal(true)
    });

    it(' se a função retorna o objeto esperado', async () => {
      await productsController.findById(request, response)
      expect(response.json.calledWith(expectResult)).to.be.equal(true)
    });

  });
});
