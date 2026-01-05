document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    const feedbackBox = document.getElementById('form-feedback');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            if (nome === '' || email === '' || mensagem === '') {
                showFeedback('Por favor, preencha todos os campos.', 'error');
                return;
            }

            const btnSubmit = form.querySelector('.btn-submit');
            const originalBtnText = btnSubmit.innerHTML;
            btnSubmit.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> ENVIANDO...';
            btnSubmit.disabled = true;

            setTimeout(() => {
               
                const isSuccess = Math.random() > 0.5;

                if (isSuccess) {
                    showFeedback('Sucesso! Sua mensagem foi enviada para a equipe FullCustom.', 'success');
                    form.reset(); 
                } else {
                    showFeedback('Erro no envio. Tente novamente.', 'error');
                }

                btnSubmit.innerHTML = originalBtnText;
                btnSubmit.disabled = false;

            }, 1500);
        });
    }

    function showFeedback(message, type) {
        feedbackBox.textContent = message;

        feedbackBox.className = 'feedback-msg ' + type;
        feedbackBox.style.display = 'block';

        setTimeout(() => {
            feedbackBox.style.display = 'none';
        }, 5000);
    }
});