const { describe } = require("mocha");
const { expect } = require("chai");
const sinon = require("sinon");

const productsServices = require('../../../services/productsServices')

describe('02 - Services Tests - camada productsServices', () => {

  describe('1 - Verifica se getAll retorna todos os produtos', () => {
    it(' se retorna um array', async () => {
      const result = await productsServices.getAll()
      expect(result).to.be.a('array')
    });

    it(' se o array não está vazio', async () => {
      const result = await productsServices.getAll()
      expect(result).to.be.not.empty
    });
  });

  describe('2 - testa o service getById', () => {
    it('testa se retorna um objeto', async () => {

      const id = 1

      const result = await productsServices.findById(id)
      expect(result).to.be.a('object')
    });

    it('testa se caso não for passado um valor inválido para o id, a função retorna falso', async () => {
      const falseID = 6

      const result = await productsServices.findById(falseID)
      expect(result).to.be.not.true
    });
  });


}) 