import {  } from 'react';
import { Link } from 'react-router-dom';
import baseStyle from './base.module.css';
import { HiPencil as Editar } from 'react-icons/hi';
import { BsFillTrash3Fill as Excluir } from 'react-icons/bs';

export const ListaPedidos = [
  {id: 1, nome: "Guioza", quant: 4, desc:"Pastéis japoneses recheados de carne e legumes.", valor: 16.99 },
  {id: 2, nome: "Niguiri", quant: 20, desc:"Sushi de arroz com peixe fresco.", valor: 28.99 },
  {id: 3, nome: "Hot Roll", quant: 6, desc:"Sushi empanado com camarão e cream cheese.", valor: 26.99 },
  {id: 4, nome: "Hossomaki", quant: 12, desc:"Rolinhos de alga nori com recheio de peixe e arroz.", valor: 44.99 },
  { id: 5, nome: "Uramaki", quant: 16, desc: "Sushi enrolado com arroz por fora, recheado com peixe fresco e outros ingredientes.", valor: 58.99 },
  { id: 6, nome: "Temaki", quant: 2, desc: "Cone de alga nori recheado com arroz, peixe, legumes e outros sabores deliciosos.", valor: 52.99 },
];



function Pedido() {


  return (
    <>
      <section className={`${baseStyle.sectionContainer} ${baseStyle.produtoPedidoContainer}`}>
        <h1>Pedidos</h1>
        <div className={baseStyle.tableContainer}>
          <table>
            <thead>
              <tr>
                <th>ID do Pedido</th>
                <th>Quantidade</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Preço (R$)</th>
                <th>Editar</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>

              {ListaPedidos.map((item, indice) => (
                <tr key={indice}>
                  <td>{item.id}</td>
                  <td>{item.quant}</td>
                  <td>{item.nome}</td>
                  <td>{item.desc}</td>
                  <td>{item.valor}</td>
                  <td>
                    <Link to={`/editar/pedido/${item.id}`} className={baseStyle.tableIcon}>
                      <Editar size={24}/>
                    </Link>
                  </td>
                  <td>
                    <Link to={`/excluir/pedido/${item.id}`} className={baseStyle.tableIcon}>
                      <Excluir size={24}/>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to={'/cadastrar/pedido'}><button className={baseStyle.btnSubmit}>Cadastrar novo pedido</button></Link>
        </div>
      </section>
    </>
  );
}

export default Pedido;