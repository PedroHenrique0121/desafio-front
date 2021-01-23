


import React, { useState, useEffect } from "react";

import axios from "axios";
import "./listagem.css";
import Menu from "./Menu";
import { Link } from "react-router-dom"
import { renderIntoDocument } from "react-dom/test-utils";

export default function Listagem(props) {
    const [cliente, setCliente] = useState([]);



    function carregar() {
        // You can await here
        axios.get("http://192.168.0.104:8085/clientes").then(resposta => {

            setCliente(resposta.data)

        })
    }



    useEffect(() => {


        // ...
        carregar();

    }, []);




    return (
        <>
            <Menu></Menu>
            <div className="container">

                {

                    cliente.map(cli => (

                        <>

                            <div className="card" >
                                <span className="indentificador">id : <strong>{cli.idCliente}</strong></span>
                                <span className="titulo">Nome do Cliente: <strong>{cli.nomeCliente}</strong></span>

                                <div className="Botoes">
                                    <Link className="botaoLink" to={{
                                        pathname: '/alterar',
                                        state: {
                                            id: cli.idCliente,
                                            n: cli.nomeCliente
                                        }

                                    }} >Editar</Link>
                                    <button className="botaoExcluir" onClick={
                                        async function excluir() {
                                            await axios.delete(`http://192.168.0.104:8085/deletarCliente/${cli.idCliente}`).then(() => {

                                                alert("Cliente Excluido com sucesso!");

                                                  carregar()
                                            }).catch(err => {
                                                alert("houve um erro ineperado na tentativa de exclusão!")
                                            })
                                        }
                                    }>Deletar</button>
                                </div>
                            </div>

                        </>
                    ))


                }



                <Link className="botaoLink" to="/cadastrar">  voltar</Link>
            </div>
        </>
    );

}

