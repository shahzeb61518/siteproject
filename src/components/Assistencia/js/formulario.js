
$('#form-contato').submit(function(){
    var nome = $('#nome');
    var email = $('#email');
    var equipamento = $('#equipamento');
    var mensagem = $('#mensagem');
    var erro = $('.alert');
    var campo = $('#campo-erro');

    erro.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid');

    // valida o campo nome
    if (nome.val() == ''){
        erro.removeClass('d-none');
        campo.html('nome'); 
        nome.focus();
        nome.addClass('is-invalid')
        return false;
    }

    // valida o campo email
    if (email.val() == ''){
        erro.removeClass('d-none');
        campo.html('email'); 
        email.focus();
        email.addClass('is-invalid')
        return false;
    }

     // valida o campo equipamento
    if (equipamento.val() == ''){
        erro.removeClass('d-none');
        campo.html('equipamento'); 
        equipamento.focus();
        equipamento.addClass('is-invalid')
        return false;
    }

     // valida o campo mensagem
    if (mensagem.val() == ''){
        erro.removeClass('d-none');
        campo.html('mensagem'); 
        mensagem.focus();
        mensagem.addClass('is-invalid')
        return false;
    }

    // o formulario é enviado
    return true;

});