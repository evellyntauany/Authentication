import React, { useState, useEffect, useContext } from 'react';
import { setupAPIClient } from '../../../hooks/useApi';
import { AuthContext } from '../../../contexts/Auth/AuthContext';
import { Ichamado } from '../../../types/Called';
import './listCall.scss';
import { User, UserId } from '../../../types/User';
import LinkComponent from '../../../components/Link';
import { statusEnum } from '../../../types/Called';
import Paginacao from '../../../components/Paginacao';

const ListChamados = () => {
  const api = setupAPIClient();
  const auth = useContext(AuthContext);
  const [objetos, setObjetos] = useState<Ichamado[]>([]);
  const [userIdenco, setUserId] = useState<number[]>([]);
  const [dadosUser, setdadosUser] = useState<UserId[]>([]);
  const [statusFilter, setStatusFilter] = useState<statusEnum | ''>('');
  const [filter, setFilter] = useState('');

  const [itensPorPagina, setItensPorPagina] = useState(10);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [dados, setDados] = useState<Ichamado[]>([]);

  useEffect(() => {
    api
      .get('/allchamados')
      .then((res) => {
        setObjetos(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [api]);

  useEffect(() => {
    if (objetos.length > 0) {
      const userIds = objetos.map((objeto) => objeto.userId);
      if (userIds !== userIdenco) {
        setUserId(userIds);
      }
    }
  }, [objetos, userIdenco]);

  const arraySemDuplicatas = Array.from(new Set(userIdenco));

  useEffect(() => {
    api
      .get(`/search/${arraySemDuplicatas}`)
      .then((res) => {
        setdadosUser(res.data.user);
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
  }, [api, arraySemDuplicatas]);

  const handleStatusFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(event.target.value as statusEnum | '');
  };

  const filteredData = objetos.filter((item: Ichamado) => {
    const matchesStatus = statusFilter === '' || item.status === statusFilter;
    return matchesStatus;
  });

  useEffect(() => {
    const indiceInicio = (paginaAtual - 1) * itensPorPagina;
    const indiceFim = indiceInicio + itensPorPagina;
    const dadosPagina = filteredData.slice(indiceInicio, indiceFim);
    setDados(dadosPagina);
  }, [filteredData, paginaAtual, itensPorPagina]);

  const handlePaginaAnterior = () => {
    if (paginaAtual > 1) {
      setPaginaAtual(paginaAtual - 1);
      }
    }

        const handleProximaPagina = () => {
          if (paginaAtual < totalPaginas) {
            setPaginaAtual(paginaAtual + 1);
          }
        };
      
        const handleItensPorPaginaChange = (value: number) => {
          setItensPorPagina(value);
          setPaginaAtual(1); // Reinicia a página ao alterar a quantidade de itens por página
        };
      
        const totalPaginas = Math.ceil(filteredData.length / itensPorPagina);
      
        return (
          <>
            <div className="table">
              <div className="filter">
                <h4>Filtrar por status:</h4>
                <select value={statusFilter} onChange={handleStatusFilterChange}>
                  <option value="">Todos</option>
                  {Object.values(statusEnum).map((ob) => (
                    <option key={ob} value={ob}>
                      {ob}
                    </option>
                  ))}
                </select>
              </div>
      
              {dados.length ? (
                <>
                  <table className="table__list">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Id user</th>
                        <th>Descricao</th>
                        <th>Status</th>
                        <th>Atribuido a</th>
                      </tr>
                    </thead>
      
                    <tbody>
                      {dados.map((objeto: Ichamado) => (
                        <tr key={objeto.id}>
                          <td>{objeto.id}</td>
                          <td>{objeto.userId}</td>
                          <td>{objeto.description}</td>
                          <td>{objeto.status}</td>
                          <td>
                            <LinkComponent toPage={`/call/${objeto.id}`}>
                              Acessar chamado
                            </LinkComponent>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
      
                  <Paginacao
                    paginaAtual={paginaAtual}
                    totalPaginas={totalPaginas}
                    onPaginaAnterior={handlePaginaAnterior}
                    onProximaPagina={handleProximaPagina}
                    itensPorPagina={itensPorPagina}
                    onItensPorPaginaChange={handleItensPorPaginaChange}
                  />
                </>
              ) : (
                <h1>Não há chamados em aberto</h1>
              )}
            </div>
            <LinkComponent className="button_back" toPage={'/'}>
              Voltar
            </LinkComponent>
          </>
        );
      };
      
      export default ListChamados;
      
