const { describe } = require('mocha');

const { expect } = require('chai');

const sinon = require('sinon');

const conec = require('../../../models/connection');
const productsModel = require('../../../models/productsModel');

describe('01 - Models Tests - camada productsModel', () => {

  describe('1 - Verifica se retorna todos os produtos', () => {

    it(' se retorna um array', async () => {
      const result = await productsModel.getAll()
      expect(result).to.be.a('array')
    });

    it(' se o array não está vazio', async () => {
      const result = await productsModel.getAll()
      expect(result).to.be.not.empty
    });
  });

  // describe('2 - Verifica se retorna ID do produto pesquisado', () => {
  //   const idMock = 1

  //   const idMockProduct = [{
  //     id: 1,
  //     name: "Martelo de Thor",
  //   }];

  //   it(' se retorna um array', async () => {
  //     const result = await productsModel.findById(idMock)
  //     expect(result).to.be.a('array')
  //   })

  //   it(' se o array não está vazio', async () => {
  //     const result = await productsModel.findById(idMock)
  //     expect(result).to.be.not.empty
  //   })

  //   it(' se retorna o "Martelo do Thor"', async () => {
  //     const result = await productsModel.findById(idMock)
  //     expect(result).to.deep.equal(idMockProduct)
  //   })
  // });

  // describe('3 - Verifica se é possível adicionar um produto novo', () => {
  //   const newProduct = 'Armadilha Venenosa'
  //   it(' se retorna um objeto', async () => {
  //     const result = await productsModel.addProduct(newProduct)
  //     expect(result).to.be.a('object')
  //   });
  // }); // #####################

  // describe('4 - Verifica se é possível alterar um produto', async () => {
  //   const nameMock = "Martelo do Batman";
  //   const idMock = 1

  //   before(() => {
  //     const execute = [{ setRows: 1 }]
  //     sinon.stub(conec, 'execute').resolves(execute)
  //   })

  //   after(() => {
  //     conec.execute.restore()
  //   })

  //   it(' alterando produto', async () => {
  //     const result = await productsModel.setProduct(nameMock, idMock);
  //     // expect(result).to.be.a('object')
  //     expect(result.setRows).to.be.equal(1)
  //   })
  // })

  // describe('5 - Verifica se é possível deletar um produto', () => {
  //   const id = 1

  //   before(() => {
  //     const execute = [{ settedRows: 1 }];
  //     sinon.stub(conec, 'execute').resolves(execute)
  //   })

  //   after(() => {
  //     conec.execute.restore()
  //   });

  //   it(' deletando produto', async () => {
  //     const result = await productsModel.deleteProduct(id)
  //     expect(result.settedRows).to.be.equal(undefined)
  //   });
  // });

});
