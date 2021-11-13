
import React from "react";

const Teste = () => {
    return (
        <>
            <div class = "container">
       <div class = "row">
            <div class="col-6">
       
        <div class="card">
            <div class = "card-body">
        <h1> Pedido de Assistência </h1>
        <form id="form-contato">
            <div class="form-group">
                <label for="nome" >Nome: </label>
                <input class="form-control" type = "text" name="nome" id="nome" placeholder="Introduza o seu nome "/>
            </div>
            <div class="form-group">
                <label for ="email">Email: </label>
                <input class="form-control" type="email" name="email" id="email" placeholder="Introduza o seu email "/>
            </div>
    
            <div class="form-group">
                <label for ="aparelho">Equipamento: </label>
                <input class="form-control" type="email" name="email" id="email" placeholder="Introduza o nome do equipamento "/>
            </div>
    
            <div class = "form-group">
                <label for="mensagem">Mensagem: </label>
                <textarea class="form-control" name="mensagem" id="mensagem" placeholder="Digite o problema do equipamento"></textarea>
            </div>
            <div class="form-group text-center" >
                <button type="submit" class="btn btn-primary">Enviar </button>
            </div>
    
            <div class =" altert alert-danger ">
                Preencha o campo <span id="campo-erro"></span> !
            </div>
        </form>
        </div>
    </div>
    
    
    </div>
    <div class="col-6">
        <div class="card">
            <div class ="card-body">
             
            </div>
        </div>
    </div>
    
      </div> 
    </div>
    
    <script src="js/formulario.js"></script>
    <script src = "js/jquery-3.4.1.slim.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
        </>
    );
};

export default Teste

  