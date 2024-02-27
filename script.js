$(document).ready(function(){
  // Mascara campo celular
  $('#cellphone').mask('(00) 00000-0000');

  $('#userForm').submit(function(event) {
    event.preventDefault();
    // Simula o envio do formulário
    setTimeout(function() {
      $('.container').html('<div class="success-container"><img src="https://logowik.com/content/uploads/images/blue-check2219.jpg" alt="Checkmark Icon"><h2>Formulário Enviado com Sucesso</h2><button onclick="window.location.href=\'index.html\'">Voltar ao Início</button></div>');
    }, 1000);
  });
});
