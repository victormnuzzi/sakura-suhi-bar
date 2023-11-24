import { useState } from 'react';
import { ListaPedidos } from './Pedido.jsx';
import { useNavigate } from 'react-router-dom';
import baseStyle from './base.module.css';

function InserirPedido() {
  
  const navigate = useNavigate();

  
  let novoId = ListaPedidos[ListaPedidos.length - 1].id + 1;

  const [pedido, setPedido] = useState({
    id: novoId,
    nome: '',
    quant:'',
    desc: '',
    valor: '',
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    ListaPedidos.push(pedido);
    navigate('/pedidos');
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setPedido({ ...pedido, [name]: value });
  };

  return (
    <>
      <section className={`${baseStyle.sectionContainer} ${baseStyle.produtoPedidoContainer}`}>

        <form onSubmit={handleSubmit} className={baseStyle.formContainer}>
          <fieldset>
            <h1 className={baseStyle.formTittle}>Cadastro de Pedido</h1>
            
            <div className={baseStyle.formGroup}>
              <label htmlFor="idNome"> Nome</label>
              <input type="text" name="nome" id="idNome" value={pedido.nome} onChange={handleChange}/>
            </div>
          
            <div className={baseStyle.formGroup}>
              <label htmlFor="idQuant"> Quantidade</label>
              <input type="number" name="quant" id="idQuant" value={pedido.quant} onChange={handleChange} />
            </div>
          
            <div className={baseStyle.formGroup}>
              <label htmlFor="idDesc">Descrição</label>
              <input type="text" name="desc" id="idDesc" value={pedido.desc}onChange={handleChange} />
            </div>
          
            <div className={baseStyle.formGroup}>
              <label htmlFor="idValor"> Valor (R$)</label>
              <input type="text" name="valor" id="idValor" value={pedido.valor} onChange={handleChange} />
            </div>
          
          <div className={baseStyle.btnContainer}>
            <button onClick={handleSubmit} className={baseStyle.btnSubmit}>Cadastrar</button>
            <button onClick={() => navigate('/pedidos')} className={baseStyle.btnSubmit}>Cancelar</button>
          </div>
            
          </fieldset>
        </form>
      </section>    
    </>
  );
}
export default InserirPedido;
