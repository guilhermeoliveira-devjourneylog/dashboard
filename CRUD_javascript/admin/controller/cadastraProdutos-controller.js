import { produtoService } from '../service/produtos-service.js'

const formulario = document.querySelector('[data-form]')


formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault()
  try {
    const produtor = evento.target.querySelector('[data-produtor]').value
    const nome = evento.target.querySelector('[data-nome]').value

    await produtoService.criaProdutos(produtor, nome)
    window.location.href = '../public/cadastro_concluido.html'
  }
  catch (erro) {
    console.log(erro)
    window.location.href = "../public/erro.html"
  }
})