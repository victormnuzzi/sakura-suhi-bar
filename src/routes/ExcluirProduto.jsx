import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ListaProdutos } from './Produtos.jsx';
import baseStyle from './base.module.css';

function ExcluirProduto() {
  
  const { id } = useParams();
  const navigate = useNavigate();

  const recProdutoListaById = ListaProdutos.filter((item) => item.id == id);

  const [produto] = useState({
    id: recProdutoListaById[0].id,
    nome: recProdutoListaById[0].nome,
    quant:recProdutoListaById[0].quant,
    desc: recProdutoListaById[0].desc,
    valor: recProdutoListaById[0].valor,
  });
  
  const handleExclude = (event) => {
    event.preventDefault();
    let indice;
    ListaProdutos.forEach((item, index) => {
      if (item.id == produto.id) {
        indice = index;
      }
    });
    ListaProdutos.splice(indice, 1);
    navigate('/produtos');
  };

  return (
    <section className={`${baseStyle.sectionContainer} ${baseStyle.produtoPedidoContainer}`}>
      <div className={baseStyle.excluirContainer}>
        <h1>Excluir Produto {produto.id}</h1>
        <div className={baseStyle.excluirText}>
          <p><span className={baseStyle.excluirTextTittle}>Nome:</span> {produto.nome}</p>
          <p><span className={baseStyle.excluirTextTittle}>Quantidade:</span> {produto.quant}</p>
          <p><span className={baseStyle.excluirTextTittle}>Descrição:</span> {produto.desc}</p>
          <p><span className={baseStyle.excluirTextTittle}>Valor (R$):</span> {produto.valor}</p>
        </div>
        <div className={baseStyle.btnContainer}>
          <button onClick={handleExclude} className={baseStyle.btnSubmit}>Excluir</button>
          <button onClick={() => navigate('/produtos')} className={baseStyle.btnSubmit}>Cancelar</button>
        </div>
      </div>
    </section>
  );
}
export default ExcluirProduto;
