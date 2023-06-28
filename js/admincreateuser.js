function generatePassword() {
    const length = 20;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$&';
    let password = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    return password;
  }

  const generateButton = document.querySelector('.generate-btn');
  const passwordInput = document.querySelector('#userpasswordinput');

  generateButton.addEventListener('click', function() {
    const generatedPassword = generatePassword();
    passwordInput.value = generatedPassword;
  });


