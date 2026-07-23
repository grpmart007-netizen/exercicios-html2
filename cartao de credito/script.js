
    const inputNumber = document.getElementById('card-number');
    const inputName = document.getElementById('card-name');
    const inputValidity = document.getElementById('card-validity');

    const displayNumber = document.getElementById('display-number');
    const displayName = document.getElementById('display-name');
    const displayValidity = document.getElementById('display-validity');

    // Formata número do cartão com espaços
    inputNumber.addEventListener('input', () => {
        let value = inputNumber.value.replace(/\D/g, '').substring(0,16);
        value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
        displayNumber.textContent = value.padEnd(19, '#');
        inputNumber.value = value;
    });

    // Atualiza nome
    inputName.addEventListener('input', () => {
        displayName.textContent = inputName.value.trim() || 'NOME DO TITULAR';
    });

    // Formata validade
    inputValidity.addEventListener('input', () => {
        let value = inputValidity.value.replace(/\D/g, '').substring(0,4);
        if (value.length >= 3) {
            value = value.replace(/(\d{2})(\d{1,2})/, '$1/$2');
        }
        displayValidity.textContent = value || 'MM/AA';
        inputValidity.value = value;
    });