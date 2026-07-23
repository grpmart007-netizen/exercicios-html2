  const termos = document.getElementById('termos');
  const checkbox = document.getElementById('aceito');
  const botao = document.getElementById('cadastrar');

  // Monitora rolagem
  termos.addEventListener('scroll', () => {
    const chegouAoFim = termos.scrollTop + termos.clientHeight >= termos.scrollHeight;
    if (chegouAoFim) {
      checkbox.disabled = false;
    }
  });

  // Habilita botão apenas se checkbox estiver marcado
  checkbox.addEventListener('change', () => {
    botao.disabled = !checkbox.checked;
  });

