import { useState } from 'react';
import { ListaProdutos } from './Produtos.jsx';
import { useNavigate } from 'react-router-dom';
import baseStyle from './base.module.css';

function InserirProduto() {
  
  const navigate = useNavigate();

  
  let novoId = ListaProdutos[ListaProdutos.length - 1].id + 1;

  const [produto, setProduto] = useState({
    id: novoId,
    nome: '',
    quant:'',
    desc: '',
    valor: '',
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    ListaProdutos.push(produto);
    navigate('/produtos');
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  return (
    <>
      <section className={`${baseStyle.sectionContainer} ${baseStyle.produtoPedidoContainer}`}>

        <form onSubmit={handleSubmit} className={baseStyle.formContainer}>
          <fieldset>
            <h1 className={baseStyle.formTittle}>Cadastro de Produto</h1>
            
            <div className={baseStyle.formGroup}>
              <label htmlFor="idNome"> Nome</label>
              <input type="text" name="nome" id="idNome" value={produto.nome} onChange={handleChange}/>
            </div>
          
            <div className={baseStyle.formGroup}>
              <label htmlFor="idQuant"> Quantidade</label>
              <input type="number" name="quant" id="idQuant" value={produto.quant} onChange={handleChange} />
            </div>
          
            <div className={baseStyle.formGroup}>
              <label htmlFor="idDesc">Descrição</label>
              <input type="text" name="desc" id="idDesc" value={produto.desc}onChange={handleChange} />
            </div>
          
            <div className={baseStyle.formGroup}>
              <label htmlFor="idValor"> Valor (R$)</label>
              <input type="text" name="valor" id="idValor" value={produto.valor} onChange={handleChange} />
            </div>
          
          <div className={baseStyle.btnContainer}>
            <button onClick={handleSubmit} className={baseStyle.btnSubmit}>Cadastrar</button>
            <button onClick={() => navigate('/produtos')} className={baseStyle.btnSubmit}>Cancelar</button>
          </div>
            
          </fieldset>
        </form>
      </section>    
    </>
  );
}
export default InserirProduto;
