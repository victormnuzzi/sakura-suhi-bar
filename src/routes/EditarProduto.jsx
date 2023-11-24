import { useNavigate, useParams } from 'react-router-dom';
import { ListaProdutos } from './Produtos.jsx';
import { useState } from 'react';
import baseStyle from './base.module.css';

function EditarProduto() {

  const { id } = useParams();
  const navigate = useNavigate();

  const recProdutoListaById = ListaProdutos.filter((item) => item.id == id);

  const [produto, setProduto] = useState({
    id: recProdutoListaById[0].id,
    nome: recProdutoListaById[0].nome,
    quant:recProdutoListaById[0].quant,
    desc: recProdutoListaById[0].desc,
    valor: recProdutoListaById[0].valor,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    let indice;
    ListaProdutos.forEach((item, index) => {
      if (item.id == produto.id) {
        indice = index;
      }
    });
    ListaProdutos.splice(indice, 1, produto);
    navigate('/produtos');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduto({ ...produto, [name]: value });
  };

  return (
    <section className={`${baseStyle.sectionContainer} ${baseStyle.produtoPedidoContainer}`}>
      <form onSubmit={handleSubmit} className={baseStyle.formContainer}>
        <fieldset>
          <h1 className={baseStyle.formTittle}>Editar Produto {produto.id}</h1>

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
            <button onClick={() => navigate('/produtos')} className={baseStyle.btnSubmit}>Cancelar</button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}
export default EditarProduto;
