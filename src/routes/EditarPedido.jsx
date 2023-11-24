import { useNavigate, useParams } from 'react-router-dom';
import { ListaPedidos } from './Pedido.jsx';
import { useState } from 'react';
import baseStyle from './base.module.css';

function EditarPedido() {
  const { id } = useParams();
  const navigate = useNavigate();

  const recPedidoListaById = ListaPedidos.filter((item) => item.id == id);

  const [produto, setProduto] = useState({
    id: recPedidoListaById[0].id,
    nome: recPedidoListaById[0].nome,
    quant:recPedidoListaById[0].quant,
    desc: recPedidoListaById[0].desc,
    valor: recPedidoListaById[0].valor,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    let indice;
    ListaPedidos.forEach((item, index) => {
      if (item.id == produto.id) {
        indice = index;
      }
    });
    ListaPedidos.splice(indice, 1, produto);
    navigate('/pedidos');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduto({ ...produto, [name]: value });
  };

  return (
    <section className={`${baseStyle.sectionContainer} ${baseStyle.produtoPedidoContainer}`}>
      <form onSubmit={handleSubmit} className={baseStyle.formContainer}>
        <fieldset>
          <h1 className={baseStyle.formTittle}>Editar Pedido {produto.id}</h1>

          <div className={baseStyle.formGroup}>
            <label htmlFor="idNome">Nome</label>
            <input type="text" name="nome" id="idNome" value={produto.nome} onChange={handleChange} />
          </div>

          <div className={baseStyle.formGroup}>
            <label htmlFor="idQuant"> Quantidade</label>
            <input type="number" name="quant" id="idQuant" value={produto.quant} onChange={handleChange} />
          </div>
          
          <div className={baseStyle.formGroup}>
            <label htmlFor="idDesc">Descrição</label>
            <input type="text" name="desc" id="idDesc" value={produto.desc} onChange={handleChange} />
          </div>

          <div className={baseStyle.formGroup}>
            <label htmlFor="idValor">Valor (R$)</label>
            <input type="text" name="valor" id="idValor" value={produto.valor} onChange={handleChange} />
          </div>

          <div className={baseStyle.btnContainer}>
            <button type="subtmit" className={baseStyle.btnSubmit}>Editar</button>
            <button onClick={() => navigate('/pedidos')} className={baseStyle.btnSubmit}>Cancelar</button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}

export default EditarPedido;
