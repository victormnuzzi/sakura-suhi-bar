import {  } from 'react';import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ListaPedidos } from './Pedido.jsx';
import baseStyle from './base.module.css';

function ExcluirPedido() {

  const { id } = useParams();
  const navigate = useNavigate();

  const recPedidosListaById = ListaPedidos.filter((item) => item.id == id);

  const [produto] = useState({
    id: recPedidosListaById[0].id,
    nome: recPedidosListaById[0].nome,
    quant:recPedidosListaById[0].quant,
    desc: recPedidosListaById[0].desc,
    valor: recPedidosListaById[0].valor,
  });
  
  const handleExclude = (event) => {
    event.preventDefault();
    let indice;
    ListaPedidos.forEach((item, index) => {
      if (item.id == produto.id) {
        indice = index;
      }
    });
    ListaPedidos.splice(indice, 1);
    navigate('/pedidos');
  };

  return (
    <>
      <section className={`${baseStyle.sectionContainer} ${baseStyle.produtoPedidoContainer}`}>
      <div className={baseStyle.excluirContainer}>
        <h1>Excluir Pedido {produto.id}</h1>
        <div className={baseStyle.excluirText}>
          <p><span className={baseStyle.excluirTextTittle}>Nome:</span> {produto.nome}</p>
          <p><span className={baseStyle.excluirTextTittle}>Quantidade:</span> {produto.quant}</p>
          <p><span className={baseStyle.excluirTextTittle}>Descrição:</span> {produto.desc}</p>
          <p><span className={baseStyle.excluirTextTittle}>Valor (R$):</span> {produto.valor}</p>
        </div>
        <div className={baseStyle.btnContainer}>
          <button onClick={handleExclude} className={baseStyle.btnSubmit}>Excluir</button>
          <button onClick={() => navigate('/pedidos')} className={baseStyle.btnSubmit}>Cancelar</button>
        </div>
      </div>
    </section>
    </>
  )
}

export default ExcluirPedido
