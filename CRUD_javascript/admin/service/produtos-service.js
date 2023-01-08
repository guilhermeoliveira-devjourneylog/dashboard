const listaProdutos = () =>  {
    return fetch(`http://localhost:3000/profile`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar os produtos')
    })
}

const criaProdutos = (produtor, nome) => { 
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            produtor: produtor,
            nome: nome
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível criar um produtos')
    })
}

const removeProdutos = (id) => { 
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
    .then( resposta => { 
        if(!resposta.ok){
        throw new Error('Não foi possível deletar um produtos')
        }
    })
}
 
const detalhaProdutos = (id) => { 
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => { 
        if(resposta.ok){
            return resposta.json()
        }
    
        throw new Error('Não foi possível detalhar um produtos')
    })
}

const atualizaProdutos = (id, produtor, nome) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: { 
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            produtor: produtor, 
            nome: nome
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar um produto')
    })
}

export const produtoService = { 
    listaProdutos,
    criaProdutos, 
    removeProdutos,
    detalhaProdutos,
    atualizaProdutos

}
