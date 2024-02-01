class controlProduto {
    constructor() {
        this.corpoTabela = document.getElementById("corpoTabela");
    }

    getNome () {
        return document.getElementById("nome").value;
    }

    getDescricao () {
        return document.getElementById("descricao").value
    }

    getPreco () {
        return document.getElementById("preco").value
    }

    redirecionarEdicao(produto) {
        window.location.href = "/?produto=" + JSON.stringify(produto);
    }

    redirecionarHome() {
        window.location.href = "/";
    }

    async popularTabela(produtos) {
        this.corpoTabela.innerHTML = "" 
        produtos.forEach((produto) => {
            var linha = document.createElement("tr");
            for (let propriedade in produto) {
                let celula = document.createElement("td");
                celula.textContent = produto[propriedade];
                linha.appendChild(celula);
            }
            linha.addEventListener("click", () => this.redirecionarEdicao(produto));
            this.corpoTabela.appendChild(linha);
        });
    }

    
}


export default controlProduto;

