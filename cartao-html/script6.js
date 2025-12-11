
    const form = document.getElementById('formCadastro');
    const mensagemErro = document.getElementById('mensagemErro');

    form.addEventListener('submit', function(event) {
      mensagemErro.textContent = ''; // limpa mensagens anteriores
      if (form.senha.value.length < 6) {
        event.preventDefault();
        mensagemErro.textContent = 'A senha deve ter pelo menos 6 caracteres.';
      }
    });