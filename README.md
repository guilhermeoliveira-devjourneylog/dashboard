# Modelagem

## Usuários

Cada usuário tem um nome de usuário e senha para autenticação.
Cada usuário tem uma lista de solicitações de vendas.
Cada usuário tem acesso ao seu próprio painel, o que lhes permite visualizar e gerenciar suas solicitações de vendas.

## Solicitações de Vendas

Cada solicitação de vendas tem um ID, nome do produtor, nome do produto, quantidade de produto e status.
O status de uma solicitação de vendas pode ser "pendente", "aprovado" ou "rejeitado".

## Painel

O painel de cada usuário mostra uma lista de suas solicitações de vendas.
O painel permite que o usuário adicione novas solicitações de vendas, exiba os detalhes das solicitações existentes e exclua solicitações.

## Painel de administração

O painel de administração é acessado usando um login separado.
O painel de administração mostra uma lista de todas as solicitações de vendas de todos os usuários.
O painel de administração permite que o administrador visualize os detalhes de qualquer
solicitação e altere o status de uma solicitação para "aprovada" ou "rejeitada".