const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/mysql");

const produtoModel = sequelize.define("produtos", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

produtoModel.sync({ force: false });

module.exports = {
  produtoModel,
  cadastrar: async function (dados) {
    try {
      const resultado = await produtoModel.create({
        nome: dados.nome,
        descricao: dados.descricao,
        preco: dados.preco,
      });
      return { status: true, produtos: resultado };
    } catch (error) {
      console.error(error);
      return { status: false, error: error };
    }
  },

  exibirTodos: async function () {
    try {
      const resultado = await produtoModel.findAll({
        attributes: ["id", "nome", "descricao", "preco"]
      });
      return { status: true, produtos: resultado };
    } catch (error) {
      console.error(error);
      return { status: false, error: error };
    }
  },

  update: async function (id, dados) {
    try {
      let numRowsAffected = await produtoModel.update(
        { nome: dados.nome, descricao: dados.descricao, preco: dados.preco },
        { where: { id: id } }
      );
      if (numRowsAffected[0] > 0) {
        return { status: true };
      } else {
        console.log("aqui");
        return { status: false, error: "0update" };
      }
    } catch (error) {
      console.error(error);
      return { status: false, error: error };
    }
  },
  deletar: async function (id) {
    try {
      let qntDeletados = await produtoModel.destroy({ where: { id: id } });
      if (qntDeletados == 1) {
        return { status: true };
      } else {
        return { status: false, error: "0delete" };
      }
    } catch (error) {
      console.error(error);
      return { status: false, error: error };
    }
  },
};
