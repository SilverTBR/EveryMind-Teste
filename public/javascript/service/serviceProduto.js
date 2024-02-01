let service = {
  cadastrar: async function (nome, descricao, preco) {
    const data = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ nome: nome, descricao: descricao, preco: preco }),
    };
    let resposta = await fetch("http://localhost:3000/API/produto", data);
    return await resposta.json();
  },
  buscar: async function () {
    let resposta = await fetch("http://localhost:3000/API/produto");
    return await resposta.json();
  },
  editar: async function (id, nome, descricao, preco) {
    const data = {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ nome: nome, descricao: descricao, preco: preco }),
    };
    let resposta = await fetch("http://localhost:3000/API/produto/" + id, data);
    return await resposta.json();
  },
  deletar: async function (id) {
    const data = {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    };
    let resposta = await fetch("http://localhost:3000/API/produto/" + id, data);
    return await resposta.json();
  },
};
export default service;
