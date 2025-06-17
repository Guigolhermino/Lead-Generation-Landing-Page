const toggleButton = document.getElementById('icone');
const body = document.body;
const iconImage = document.getElementById('icone');

// --- Função para aplicar o modo ---
function applyMode(isDarkMode) {
    if (isDarkMode) {
        body.classList.add('dark-mode');
        iconImage.src = 'img/dark_mode.svg';
        iconImage.alt = 'Icone da Lua';
    } else {
        body.classList.remove('dark-mode');
        iconImage.src = 'img/light_mode.svg';
        iconImage.alt = 'Icone do Sol';
    }
}

// --- 1. Carregar o estado ao carregar a página ---
document.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
        applyMode(true); 
    } else {
        applyMode(false); 
    }
});

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'true');
        applyMode(true);
    } else {
        localStorage.setItem('darkMode', 'false');
        applyMode(false);
    }
});

// --- Código JavaScript para o alerta do formulário ---
document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('.inputToSend');

    if (submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();

            alert('Este é apenas um site demonstrativo. Nenhum dado será coletado!');
        });
    }
});