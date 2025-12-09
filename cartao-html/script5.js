document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const darkClassName = 'dark-mode';
    const localStorageKey = 'theme-preference';

    // 1. Desafio: Carregar a preferência salva no localStorage
    // Verifica se há uma preferência salva e a aplica ao carregar a página
    const savedTheme = localStorage.getItem(localStorageKey);
    if (savedTheme === 'dark') {
        body.classList.add(darkClassName);
    } else {
        // Garante que o tema claro (padrão) seja o default se não houver preferência
        body.classList.remove(darkClassName); 
    }

    // 2. Ouvinte de Evento no Botão
    themeToggle.addEventListener('click', () => {
        // Usa classList.toggle() para adicionar ou remover a classe 'dark-mode'
        body.classList.toggle(darkClassName);

        // 3. Desafio: Salvar a nova preferência no localStorage
        if (body.classList.contains(darkClassName)) {
            // Se a classe está presente, salva 'dark'
            localStorage.setItem(localStorageKey, 'dark');
            themeToggle.textContent = 'Alternar para Tema Claro';
        } else {
            // Se a classe não está presente, salva 'light'
            localStorage.setItem(localStorageKey, 'light');
            themeToggle.textContent = 'Alternar para Tema Escuro';
        }
    });

    // Atualiza o texto do botão ao carregar a página com base no tema atual
    if (body.classList.contains(darkClassName)) {
        themeToggle.textContent = 'Alternar para Tema Claro';
    } else {
        themeToggle.textContent = 'Alternar para Tema Escuro';
    }
});