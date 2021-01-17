import React, { useState, useEffect } from "react";
import "./Form.css"
import {useParams} from "react-router-dom"
import axios from "axios";

import {Link} from "react-router-dom";
import Menu from "./Menu";

const api= axios.create({
    baseURL:"http://192.168.0.104:8085",
})
 


export default function FormAlterar(props) {
              const[nome, setNome]= useState( {nome:''});
              const {id} =  props.location.state
              const {n} = props.location.state
            
    function pegaValorInput(evento){
         const {name, value}= evento.target;
                setNome({...nome ,[name]: value});
    }
    
    
    function alterar(){
        
        if(nome.nome==""){
            alert("campo nome nao pode ser vazio!")
        }else{

        
        api.put(`alterarCliente/${id}`, {id_cliente:id, nome_cliente:nome.nome}).then(res=>{
            
                alert("cliente Alterado com sucesso!")
            
                
            
        }).catch(err=>{
            alert("Nao foi possivel alterar o Cliente!")
        })
    }
    
    }
              

    return (

        <>
           <Menu></Menu>
            <div className="cont">

                <form >
                    <input className="formId" type="text" value={id}   name="id" />
                    <label > Nome do Cliente: </label>
                    <input  onChange={pegaValorInput} className="nome" placeholder={n} name="nome" type="text" autoFocus  />
                   
                     
                </form>
                     <button className="botaoCadastrar" value=" ir"onClick={alterar}> Alterar</button>
                     
            </div>
        </>
    );
}