'use client';
import { use, useEffect, useState } from "react"
import styles from './page.module.css';

export default function Localidades() {

    const [paises, setPaises] = useState(null);
    const [status, setStatus] = useState('Carregando lista de países...');
    const [showTblPaises, setShowTblPaises] = useState(false);
    const [ufs, setUfs] = useState([]);
    const [ufSelecionado, setUfSelecionado] = useState('');
    const [cidades, setCidades] = useState([]);
    

    const getPaises = async () => {
        try {
            const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/paises?orderBy=nome');
            if (!response.ok) {
                setStatus(response.statusText);
                throw new Error(`Erro ao buscar dados: ${response.statusText}`)
            }
            console.log(response);
            const dados = await response.json();
            setPaises(dados);
            setStatus('Lista de países carregada');
            console.log(dados);
        } catch (e) {
            setStatus(`Ocorreu um erro: ${e.message}`);
            console.log(`Ocorreu um erro: ${e.message}`);
        }
    }

    const getUfs = async () => {
        try {
            const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
            if (!response.ok) {
                setStatus(response.statusText);
                throw new Error(`Erro ao buscar dados: ${response.statusText}`)
            }
            console.log(response);
            const dados = await response.json();
            setUfs(dados);
            console.log(dados);
        } catch (e) {

            console.log(`Ocorreu um erro: ${e.message}`);
        }
    }

    const getCidades = async (uf) => {
        try {
            const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios
`);
            if (!response.ok) {
                setStatus(response.statusText);
                throw new Error(`Erro ao buscar dados: ${response.statusText}`)
            }
            console.log(response);
            const dados = await response.json();
            setCidades(dados);
            console.log(dados);
        } catch (e) {
            console.log(`Ocorreu um erro: ${e.message}`);
        }
    }

    useEffect(() => {
        getPaises();
        getUfs();
    }, [])

    return (
        <div>
            <h1>Localidades</h1>
            {status && <p>{status}</p>}
            {paises &&
                <div>
                    <button type="button" onClick={() => { setShowTblPaises(!showTblPaises) }}>{showTblPaises ? 'Ocultar Paises' : 'Mostrar Países'}</button>
                    {showTblPaises &&
                        <table className={styles.tbl}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>PAÍS</th>
                                    <th>REGIÃO</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paises.map(pais => (
                                    <tr key={pais.id.M49}>
                                        <td>{pais.id.M49}</td>
                                        <td>{pais.nome}</td>
                                        <td>{pais['sub-regiao'].regiao.nome}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    }

                    <select
                        onChange={ev => getCidades(ev.target.value)}
                        >
                            <option value='' disabled> Escolha uma unidade federativa</option>
                        {ufs.map(uf => (
                            <option value={uf.id} key={uf.id}>{`${uf.id} - ${uf.nome} / ${uf.sigla}`}</option>
                        ))}
                    </select>

                </div>
            }
            <table className={styles.tbl}>
                <thead>
                    <tr>
                        <th>nome</th>
                    </tr>
                </thead>
                <tbody>
                    {cidades.map(cidade => (
                        <tr key={cidade.id}>
                            <td>{cidade.nome}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}