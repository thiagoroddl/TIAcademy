const express=require('express');
const cors=require('cors');

const models=require('./models');

const app=express();
app.use(cors());
app.use(express.json());

let cliente=models.Cliente;
let servico=models.Servico;
let pedido=models.Pedidos;

app.get('/', function(req,res){
    res.send('Olá Mundo!');
});

app.get('/pedidos', function(req,res){
    res.send('Lista de pedidos!');
});

app.get('/clientes', async(req,res)=>{
   let create=await cliente.create({
    nome: "Thiago Rodrigues",
    endereco: "Rua das Camélias n 10",
    cidade:"Maringá",
    uf:"PR",
    nascimento:"1998/06/01",
   });
   res.send('Cliente foi inserido!');
});

app.post('/servicos', async(req,res)=>{
    let create=await servico.create(
        req.body
    );
    res.send('Serviço foi inserido!');
});

let port=process.env.PORT || 3000;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
});