import service from "../service/serviceProduto.js";
import ProdutoController from "./controlProdutoGeral.js";

class ProdutoControllerEdi extends ProdutoController {
  editar = async () => {
    let resultado = await service.editar(
      produtoId,
      this.getNome(),
      this.getDescricao(),
      this.getPreco()
    );
    if (resultado.status == true) {
      this.redirecionarHome();
    }
  };

  deletar = async () => {
    let resultado = await service.deletar(produtoId);
    if (resultado.status == true) {
      this.redirecionarHome();
    }
  };
}

const urlParams = new URLSearchParams(window.location.search);
const produtoObj = JSON.parse(urlParams.get("produto"));
const produtoId = produtoObj.id;

const produtoControllerEdi = new ProdutoControllerEdi();

async function preencherTabela() {
  const resultado = await service.buscar();
  produtoControllerEdi.popularTabela(resultado.produtos);
}

preencherTabela();

document
  .getElementById("cancelar")
  .addEventListener("click", () => produtoControllerEdi.redirecionarHome());
document
  .getElementById("editar")
  .addEventListener("click", () => produtoControllerEdi.editar());
document
  .getElementById("deletar")
  .addEventListener("click", () => produtoControllerEdi.deletar());
document
  .getElementById("titulo")
  .addEventListener("click", () => produtoControllerEdi.redirecionarHome());
