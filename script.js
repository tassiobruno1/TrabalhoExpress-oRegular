document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        validateForm();
    });

    // Adiciona validação em tempo real
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', function() {
            validateField(this);
        });
        
        input.addEventListener('blur', function() {
            validateField(this);
        });
    });

    function validateField(field) {
        const errorElement = document.getElementById(`${field.id}-error`);
        
        if (field.checkValidity()) {
            field.classList.add('valid');
            field.classList.remove('invalid');
            errorElement.classList.remove('show');
        } else {
            if (field.value) { // Só mostra erro se o campo não estiver vazio
                field.classList.add('invalid');
                field.classList.remove('valid');
                errorElement.textContent = field.validationMessage;
                errorElement.classList.add('show');
            } else {
                field.classList.remove('valid', 'invalid');
                errorElement.classList.remove('show');
            }
        }
    }

    function validateForm() {
        let isValid = true;
        const inputs = document.querySelectorAll('input');
        
        inputs.forEach(input => {
            validateField(input);
            if (!input.checkValidity()) {
                isValid = false;
            }
        });
        
        if (isValid) {
            // Mostrar mensagem de sucesso
            const button = document.querySelector('button');
            button.innerHTML = '<i class="fas fa-check"></i> Cadastro realizado com sucesso!';
            button.style.background = 'linear-gradient(135deg, #4cc9f0, #4895ef)';
            
            // Simular envio do formulário
            setTimeout(() => {
                alert('Formulário válido! Dados podem ser enviados.');
                // Aqui você pode enviar o formulário de verdade
                // form.submit();
            }, 1000);
        }
    }
});