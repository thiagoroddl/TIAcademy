import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './pages/Home/';
import {VisualizarCliente} from'./pages/Cliente/VisualizarCliente';
import { Menu } from './components/Menu';
import { VisualizarServico } from './pages/Servico/VisualizarServico';
import { Servico } from './pages/Servico/Servico';
import { Cliente } from './pages/Cliente/Cliente';
import { VisualizarPedido } from './pages/Pedido/VisualizarPedido';
import { Pedido } from './pages/Pedido/Pedido';
import { Cadastrar } from './pages/Servico/CadastrarServico';
import { CadastrarCliente} from './pages/Cliente/CadastrarCliente';
import { CadastrarPedido } from './pages/Pedido/CadastrarPedido';
import { Editar } from './pages/Servico/Editar';
import { EditarCliente } from './pages/Cliente/EditarCliente';
import { EditarPedido } from './pages/Pedido/EditarPedido';

function App() {
  return (
    <div>
      <Menu/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/visualizarcliente" component={VisualizarCliente}/>
          <Route path="/visualizarservico" component={VisualizarServico}/>
          <Route path="/servico/:id" component={Servico}/>
          <Route path="/cliente/:id" component={Cliente}/>
          <Route path="/visualizarpedido" component={VisualizarPedido}/>
          <Route path="/pedido/:id" component={Pedido}/>
          <Route path="/cadastrarservico" component={Cadastrar}/>
          <Route path="/cadastrarcliente" component={CadastrarCliente}/>
          <Route path="/cadastrarpedido" component={CadastrarPedido}/>
          <Route path="/editarservico/:id" component={Editar}/>
          <Route path="/editarcliente/:id" component={EditarCliente}/>
          <Route path="/editarpedido/:id" component={EditarPedido}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
