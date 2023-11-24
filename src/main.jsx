import { } from 'react';
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import Error from './routes/Error.jsx';
import Home from './routes/Home.jsx';
import Login from './routes/Login.jsx';
import Produtos from './routes/Produtos.jsx';
import Pedido from './routes/Pedido.jsx';
import Sobre from './routes/Sobre.jsx';
import InserirProduto from './routes/InserirProduto.jsx';
import InserirPedido from './routes/InserirPedido.jsx';
import EditarProduto from './routes/EditarProduto.jsx';
import EditarPedido from './routes/EditarPedido.jsx';
import ExcluirProduto from './routes/ExcluirProduto.jsx';
import ExcluirPedido from './routes/ExcluirPedido.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/produtos', element: <Produtos /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/pedidos', element: <Pedido /> },
      { path: '/cadastrar/produto', element: <InserirProduto /> },
      { path: '/cadastrar/pedido', element: <InserirPedido /> },
      { path: '/editar/produto/:id', element: <EditarProduto /> },
      { path: '/editar/pedido/:id', element: <EditarPedido /> },
      { path: '/excluir/produto/:id', element: <ExcluirProduto /> },
      { path: '/excluir/pedido/:id', element: <ExcluirPedido /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
