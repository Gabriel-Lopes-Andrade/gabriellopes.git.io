document.querySelectorAll('.palavra-chave').forEach((element) => {
    element.addEventListener('click', () => {
        element.style.animation = 'brilho 0.8s ease-in-out';
        setTimeout(() => {
            element.style.animation = ''; // Remove a animação após a execução
        }, 800);
    });
});