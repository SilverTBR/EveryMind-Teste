import service from "../service/serviceProduto.js";
import ProdutoController from "./controlProdutoGeral.js";

class ProdutoControllerCad extends ProdutoController{
    cadastrar = async () => {
        let resultado = await service.cadastrar(this.getNome(), this.getDescricao(), this.getPreco());
        if(resultado.status == true){
            preencherTabela()
        }
    }

}

const produtoControllerCad = new ProdutoControllerCad();

async function preencherTabela() {
    const resultado = await service.buscar();
    produtoControllerCad.popularTabela(resultado.produtos);
}

preencherTabela()
document.getElementById("inserir").addEventListener("click", () => produtoControllerCad.cadastrar());
document.getElementById("titulo").addEventListener("click", () => produtoControllerCad.redirecionarHome());
