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

  // describe('2 - testa o service getById', () => {
  //   it('testa se retorna um objeto', async () => {

  //     const id = 1

  //     const result = await productsServices.findById(id)
  //     expect(result).to.be.a('object')
  //   });

  //   it('testa se caso não for passado um valor inválido para o id, a função retorna falso', async () => {
  //     const falseID = 6

  //     const result = await productsServices.findById(falseID)
  //     expect(result).to.be.not.true
  //   });
  // });

  // describe('3 - Testa o addProduct', () => {
  //   const jokeName = 'Espada Do Rei'
  //   it(' retorna um objeto', async () => {
  //     const result = await productsServices.addProduct(jokeName)
  //     expect(result).to.be.a('object')
  //   });

  //   it(' se o objeto possui name e id', async () => {
  //     const result = await productsServices.addProduct(jokeName)
  //     expect(result).to.have.property('name')
  //     expect(result).to.have.property('id')
  //   });
  // });

  // describe('4 - Testa o service updateProduct', async () => {
  //   const jokeName = 'Angústia de Liandry'
  //   const id = 1
  //   const incorretID = 999
  //   const fakeReturn = {
  //     id,
  //     name: jokeName
  //   }
  //   it('Testa se caso o ID não existir, a função retorna false', async () => {
  //     const result = await productsServices.setProduct(jokeName, incorretID)
  //     expect(result).to.be.equal(false)
  //   })
  //   it('Testa se o objeto contem o nome atualizado', async () => {
  //     const result = await productsServices.setProduct(jokeName, id)
  //     expect(result).to.be.deep.equal(fakeReturn)
  //   })
  //   it('Testa se caso as informações corretas forem passadas, retorna um objeto', async () => {
  //     const result = await productsServices.setProduct(jokeName, 2)
  //     expect(result).to.be.a('object')
  //   });
  // });

  // describe('5 - Testa o service deleteProducts', () => {
  //   const fakeID = 1

  //   it('Testa se é possível deletar', async () => {
  //     const result = await productsServices.deleteProduct(fakeID)
  //     expect(result.affectedRows).to.be.equal(1)
  //   });

  //   it('Testa se, caso o ID, não exista, a função retorna falso', async () => {
  //     const result = await productsServices.deleteProduct(fakeID)
  //     expect(result).to.be.equal(false)
  //   });

  // });
}) 