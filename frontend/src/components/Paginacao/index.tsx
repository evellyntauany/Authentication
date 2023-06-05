import React from 'react';

type PaginacaoProps = {
  paginaAtual: number;
  totalPaginas: number;
  onPaginaAnterior: () => void;
  onProximaPagina: () => void;
  itensPorPagina: number;
  onItensPorPaginaChange: (value: number) => void;
};

const Paginacao: React.FC<PaginacaoProps> = ({
  paginaAtual,
  totalPaginas,
  onPaginaAnterior,
  onProximaPagina,
  itensPorPagina,
  onItensPorPaginaChange,
}) => {
  const handleItensPorPaginaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value, 10);
    onItensPorPaginaChange(value);
  };

  return (
    <div className="btnsUser">
      <button
        className="btnsUser__prev"
        onClick={onPaginaAnterior}
        disabled={paginaAtual === 1}
      >
        Anterior
      </button>
      <select value={itensPorPagina} onChange={handleItensPorPaginaChange}>
        <option value={5}>5 itens por página</option>
        <option value={10}>10 itens por página</option>
        <option value={25}>15 itens por página</option>
      </select>
      <button
        className="btnsUser__next"
        onClick={onProximaPagina}
        disabled={paginaAtual === totalPaginas}
      >
        Próxima
      </button>
    </div>
  );
};

export default Paginacao;
