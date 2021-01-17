import React from "react"
import { Link } from "react-router-dom"
import "./Menu.css"
export default function Menu() {


    return (
        <>
            <div className="menu">
                <h1>Desafio</h1>

                <div className="links">
                    <Link className="linkAcao" to="/cadastrar">Cadastrar</Link>
                    <Link className="linkAcao" to="/">Pesquisar</Link>
                    <Link className="linkAcao" to="/clientes">Lista</Link>

                </div>

            </div>
        </>
    )

}