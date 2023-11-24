import {  } from 'react';
import { Link } from 'react-router-dom';
import { HiPencil as Editar } from 'react-icons/hi';
import { BsFillTrash3Fill as Excluir } from 'react-icons/bs';
import baseStyle from './base.module.css';

export const ListaProdutos = [
  {id: 1, nome: "Niguiri", quant: 6, desc:"Sushi de arroz com peixe fresco.", valor: 34.99 },
  {id: 2, nome: "Combinado Sakura", quant: 8, desc:"Uma explosão de sabores japoneses em um único prato. Delicie-se com nossas seleções variadas.", valor: 47.99 },
  {id: 3, nome: "Guioza", quant: 8, desc:"Pastéis japoneses recheados de carne e legumes.", valor: 22.99 },
  {id: 4, nome: "Bowl", quant: 12, desc:"Uma deliciosa fusão de peixes frescos, camarões suculentos e molho especial sobre arroz perfeito.", valor: 48.99 },
];

function Produtos() {


  return (
    <>
      <section className={`${baseStyle.sectionContainer} ${baseStyle.produtoPedidoContainer}`}>
        <h1>Produtos</h1>
        <div className={baseStyle.tableContainer}>
          <table>
            <thead>
              <tr>
                <th>ID do Produto</th>
                <th>Quantidade</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Preço (R$)</th>
                <th>Editar</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>

              {ListaProdutos.map((item, indice) => (
                <tr key={indice}>
                  <td>{item.id}</td>
                  <td>{item.quant}</td>
                  <td>{item.nome}</td>
                  <td>{item.desc}</td>
                  <td>{item.valor}</td>
                  <td>
                    <Link to={`/editar/produto/${item.id}`} className={baseStyle.tableIcon}>
                      <Editar size={24}/>
                    </Link>
                  </td>
                  <td>
                    <Link to={`/excluir/produto/${item.id}`} className={baseStyle.tableIcon}>
                      <Excluir size={24}/>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to={'/cadastrar/produto'}><button className={baseStyle.btnSubmit}>Cadastrar novo produto</button></Link>
        </div>
      </section>
    </>
  );
}

export default Produtos
