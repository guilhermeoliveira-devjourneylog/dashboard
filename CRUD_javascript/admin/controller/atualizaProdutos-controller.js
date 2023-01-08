import { produtoService } from '../service/produtos-service.js'


(async () => { 
  const pegaURL = new URL(window.location)

  const id = pegaURL.searchParams.get('id')
  
  const inputProdutor = document.querySelector('[data-produtor]')
  const inputNome = document.querySelector('[data-nome]')
  try { 
    const dados = await produtoService.detalhaProdutos(id)
    inputProdutor.value = dados.produtor
    inputNome.value = dados.nome
  }
  catch(erro){
    console.log(erro)
    window.location.href="../public/erro.html"
  }

  
  const formulario = document.querySelector('[data-form]')
  
  
  formulario.addEventListener('submit', async (evento)=> { 
    evento.preventDefault()
    try {
      await produtoService.atualizaProdutos(id, inputProdutor.value, inputNome.value)
      window.location.href = "../public/edicao_concluida.html"
    }
    catch(erro){
      console.log(erro)
      window.location.href="../public/erro.html"
    }
  })
})()
