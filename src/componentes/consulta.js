import React, { useState } from "react"
import "./Form.css"

import axios from "axios";

import { Link } from "react-router-dom";
import Menu from "./Menu";

const api = axios.create({
    baseURL: "http://192.168.0.104:8085",
})

export default function Consultar() {
    const [nome, setNome] = useState({ nome: '' });
    const [cliente, setCliente] = useState([]);
    function pegaValorInput(evento) {
        const { name, value } = evento.target;
        setNome({ ...nome, [name]: value });
    }
 
    function carregar() {
        // You can await here
         axios.get(`http://192.168.0.104:8085/buscarPorNome/${nome.nome}`).then(resposta=>{

          setCliente(resposta.data)
     
})
    }
    

         


    



    return (

        <>
            <Menu></Menu>
            <div className="cont">

               
                    <label > Consulte Pelo Nome do Cliente: (Evento Enter) </label>
                    <input onChange={pegaValorInput} className="inputConsulta" name="nome" type="text" onKeyPress={function enterKeyPressed(event) {
      if (event.charCode==13 ) {
           if(nome.nome==""){
                alert ("Campo pesquisa nao pode ser vazio!")
            
           }else{
            carregar()
           }

                 

      } else {
        
      }
   }} autoFocus />


               
               
              
            </div>

            <div className="containerConsultar">

                {

                    cliente.map(cli => (

                        <>

                            <div className="cardConsulta" >
                            <span className="indentificador"> id : <strong>{cli.idCliente}</strong> </span>
                            <span className="titulo"> nome do Cliente : <strong>{cli.nomeCliente}</strong></span>

                                
                                </div>
                           

                        </>
                    ))


                }



                
            </div>
        </>
    )
}