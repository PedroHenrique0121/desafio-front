import React, { useState } from "react";
import "./Form.css"

import axios from "axios";

import {Link} from "react-router-dom";
import Menu from "./Menu";

const api= axios.create({
    baseURL:"http://192.168.0.104:8085",
})
 


export default function Form() {
              const[nome, setNome]= useState( {nome:''});

    function pegaValorInput(evento){
         const {name, value}= evento.target;
                setNome({...nome ,[name]: value});
    }
    
    
    function cadastrar(){
        if(nome.nome==""){
            alert("O campo nome não pode ser Vazio!")
        }
        else{
            api.post("/cadastrar", {nome_cliente:nome.nome}).then(res=>{
               
                    alert("cliente cadastrado com sucesso!")
               
                   
                
            }).catch(err=>{
                alert(" houve uma falha! no cadastro")
            })

        }
        
    
    }
              

    return (

        <>
           <Menu></Menu>
            <div className="cont">

                <form >
                    <label > Nome do Cliente: </label>
                    <input  onChange={pegaValorInput} className="nome" name="nome" type="text" autoFocus />
                   
                     
                </form>
                     <button className="botaoCadastrar" value=" ir"onClick={cadastrar}> cadastrar</button>
                     
            </div>
        </>
    );
}