document.addEventListener('DOMContentLoaded', function() {
    //Selecionando elementos que serão utilizados na lógica de login
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmpassword');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const confirmPasswordIcon = document.getElementById('confirmPasswordIcon');
    const passwordIcon = document.getElementById('passwordIcon')

    // Adicionando um evento de escuta para o input do campo de senha
    passwordInput.addEventListener('input', function() {
        // Verificação pra saber se o valor de password é diferente de vazio para podermos fazer alterações no form
        if (passwordInput.value.trim() !== '') {
            passwordInput.classList.add('valid');
            confirmPasswordError.textContent = '';
            passwordIcon.style.display = 'flex'

        } else {
            passwordInput.classList.remove('valid');
            confirmPasswordInput.classList.remove('error')
            confirmPasswordError.textContent = '';  
            passwordIcon.style.display = 'none'    
        }


    });

    // Adicionando um evento de escuta para o input do campo de confirmação de senha
    confirmPasswordInput.addEventListener('input', function() {
        // Verificação pra saber se os valores de passwords são iguais para podermos fazer alterações no form
        if (confirmPasswordInput.value === passwordInput.value ) {
            confirmPasswordInput.classList.remove('error');
            confirmPasswordInput.classList.add('valid');
            confirmPasswordError.textContent = '';
            confirmPasswordIcon.style.display = 'none';
            passwordIcon.style.display = 'none';
        } else {
            confirmPasswordInput.classList.remove('valid');
            confirmPasswordInput.classList.add('error');
            confirmPasswordError.textContent = 'Wrong Password';
            confirmPasswordIcon.style.display = 'inline-block'
        }
        //Verificação para não deixar alterações quando confirmpassword for vazio(correção de bug)
        if(confirmPasswordInput.value === ''){
            confirmPasswordIcon.style.display = 'none'
            confirmPasswordInput.classList.remove('error');
            confirmPasswordInput.classList.remove('valid');
        }
        
    }); 
    
  
})