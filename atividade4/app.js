const express = require('express');
const app = express();
const port = 3000;

// Objeto para armazenar os produtos em estoque.
// Estrutura: { id_produto: { nome: 'nome', qtd: quantidade } }
let estoque = {};

// Rota para adicionar um novo produto ao estoque
// Exemplo: /adicionar/1/Camiseta/10
app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
  const { id, nome, qtd } = req.params;
  
  if (estoque[id]) {
    return res.status(400).json({ error: 'Produto já existe no estoque' });
  }
  
  estoque[id] = {
    nome: nome,
    qtd: Number(qtd)
  };
  
  return res.json({
    message: 'Produto adicionado',
    produto: estoque[id]
  });
});

// Rota para listar todos os produtos do estoque
// Exemplo: /listar
app.get('/listar', (req, res) => {
  return res.json({ estoque });
});

// Rota para remover um produto do estoque
// Exemplo: /remover/1
app.get('/remover/:id', (req, res) => {
  const { id } = req.params;
  
  if (!estoque[id]) {
    return res.status(400).json({ error: 'Produto não encontrado' });
  }
  
  delete estoque[id];
  return res.json({ message: 'Produto removido' });
});

// Rota para editar a quantidade de um produto do estoque
// Exemplo: /editar/1/15
app.get('/editar/:id/:qtd', (req, res) => {
  const { id, qtd } = req.params;
  
  if (!estoque[id]) {
    return res.status(400).json({ error: 'Produto não encontrado' });
  }
  
  estoque[id].qtd = Number(qtd);
  return res.json({
    message: 'Quantidade atualizada',
    produto: estoque[id]
  });
});

// Inicia o servidor na porta definida
app.listen(port, () => {
  console.log(Servidor rodando em http://localhost:${port});
});