import { produtoService } from '../service/produtos-service.js'

const criaNovaLinha = (produtor, nome, id) =>  { 
  const linhaNovoProduto = document.createElement('tr')
  const conteudo = `
      <td class="td" data-td>${produtor}</td>
                  <td>${nome}</td>
                  <td>
                      <ul class="tabela__botoes-controle">
                          <li><a href="../telas/edita_produtos.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                          <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                      </ul>
                  </td> 
                  `
  linhaNovoProduto.innerHTML = conteudo
  linhaNovoProduto.dataset.id = id
  return linhaNovoProduto
}


const tabela = document.querySelector('[data-tabela]')

tabela.addEventListener('click', async (evento)=> {
    let ehBotaoDeDeleta = evento.target.className === 'botao-simples botao-simples--excluir'
    if(ehBotaoDeDeleta){
        try {
            const linhaProduto = evento.target.closest('[data-id]')
            let id = linhaProduto.dataset.id
            await produtoService.removeProdutos(id)
            linhaProduto.remove()
        }
        catch(erro){
            console.log(erro)
            window.location.href="../telas/erro.html"
        }
    }
})


const render = async () =>  {
    try {
        const listaProdutos = await produtoService.listaProdutos()
        listaProdutos.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.produtor,elemento.nome, elemento.id))
    })
    }
    catch(erro){
        console.log(erro)
        window.location.href="../telas/erro.html"
    }
    
}

render()