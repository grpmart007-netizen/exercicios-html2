async function lerGrupos() {
    try {
        // Faz a requisição do arquivo JSON
        const resposta = await fetch('./grupos.json', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });


        if (!resposta.ok) {
            throw new Error(`Erro ao carregar grupos.json: ${resposta.status} ${resposta.statusText}`);
        }

        const dados = await resposta.json();

        if (!dados || typeof dados !== 'object') {
            throw new Error('Formato inválido no arquivo grupos.json');
        }

        console.log('Dados lidos com sucesso:', dados);
        return dados;

    } catch (erro) {
        console.error('Falha ao ler grupos.json:', erro.message);
        return null; // Retorna null em caso de erro
    }
}
console.log(lerGrupos());

trocarTela.addEventListener('click', () => {
    const tela1 = document.getElementById('btnUsuario');
    const tela2 = document.getElementById('btnAdmin');

    tela1.style.display = 'red';
    tela2.style.display = 'blue';
});

/**
 * Gera todos os confrontos possíveis entre países de cada grupo
 * @param {Object} grupos - Objeto no formato { "A": ["Time1", "Time2", ...], ... }
 * @returns {Array} Lista de confrontos [{ grupo, time1, time2 }]
 */
function gerarConfrontos(grupos) {
  if (typeof grupos !== 'object' || grupos === null) {
    throw new Error("O parâmetro 'grupos' deve ser um objeto válido.");
  }

  const confrontos = [];

  for (const [grupo, paises] of Object.entries(grupos)) {
    if (!Array.isArray(paises) || paises.length < 2) {
      console.warn(`Grupo ${grupo} ignorado: menos de 2 países.`);
      continue;
    }

    // Gera combinações únicas (sem repetição e sem inversão)
    for (let i = 0; i < paises.length; i++) {
      for (let j = i + 1; j < paises.length; j++) {
        confrontos.push({
          grupo,
          time1: paises[i],
          time2: paises[j]
        });
      }
    }
  }

  return confrontos;
}

// Exemplo de uso após o fetch
fetch("https://api.exemplo.com/grupos")
  .then(res => {
    if (!res.ok) throw new Error("Erro ao buscar grupos");
    return res.json();
  })
  .then(grupos => {
    const listaConfrontos = gerarConfrontos(grupos);
    console.log(listaConfrontos);
  })
  .catch(err => console.error(err.message));
