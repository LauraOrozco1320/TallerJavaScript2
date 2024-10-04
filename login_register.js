document.addEventListener('DOMContentLoaded', () => {
    const registroForm = document.getElementById('registroForm');
    const loginForm = document.getElementById('loginForm');
  
    // Validación de Registro
    registroForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      const registroSuccess = document.getElementById('registroSuccess');
      const registroError = document.getElementById('registroError');
  
      registroSuccess.textContent = '';
      registroError.textContent = '';
  
      if (password.length < 6) {
        registroError.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        return;
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        registroError.textContent = 'El formato del correo no es válido.';
        return;
      }
  
      registroSuccess.textContent = 'Registro exitoso!';
    });
  
    // Validación de Login
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const loginEmail = document.getElementById('loginEmail').value.trim();
      const loginPassword = document.getElementById('loginPassword').value.trim();
      const loginSuccess = document.getElementById('loginSuccess');
      const loginError = document.getElementById('loginError');
  
      loginSuccess.textContent = '';
      loginError.textContent = '';
  
      if (loginPassword.length < 6) {
        loginError.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        return;
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(loginEmail)) {
        loginError.textContent = 'El formato del correo no es válido.';
        return;
      }
  
      loginSuccess.textContent = 'Login exitoso!';
    });
  });
  