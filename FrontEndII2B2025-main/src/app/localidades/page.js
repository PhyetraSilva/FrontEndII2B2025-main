'use client'
import { useEffect, useState } from "react";
import styles from './page.module.css';

export default function Localidades () {

    const [paises, setPaises] = useState(null);
    const [status, setStatus] = useState('carregando lista de paises...');
    const [showTblPaises, setShowTblPaises] = useState('false');

    const getPaises = async () => {
        try {
            const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/paises?orderBy=nome');
            if(!response.ok){
                setStatus(response.statusText);
                throw new Error('Erro ao buscar dados: ${response.statusText}')
            }
            console.log(response);
            const dados = await response.json();
            setPaises(dados);
            setStatus('Lista de paises carregada');
            console.log(dados);
            //setMsgBtn('Mostrar Paises');
            //setSatus(null);
        } catch (e) {
            setStatus(`Ocorreu um erro: ${e.message}`);
            console.log(`Ocorreu um erro: ${e.message}`);
        }
        //exibam id, nome do país e nome da região em uma tabela.
    }
}

    useEffect(() => {
        getPaises();
    }, [])

    return (
        <div>
            <h1>Localidades</h1>
            {status && <p>{status}</p>}
            {paises && 
                <div>
                    {/*<p>{paises}</p>*/}
                    <button type="button" onClick={() => {setShowTblPaises(!showTblPaises)}}>{showTblPaises?'Ocultar Paisees': 'Mostrar Paises'}</button>
                    {showTblPaises &&
                    <table className= {styles.tbl}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>PAISES</th>
                                <th>REGIAO</th>
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
                </div>
            
        </div>    
    )
}
  
