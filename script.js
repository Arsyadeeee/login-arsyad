document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    let errorMessage = document.getElementById('error-message');
  
    // Jika elemen error-message belum ada, buat satu
    if (!errorMessage) {
      errorMessage = document.createElement('div');
      errorMessage.id = 'error-message';
      errorMessage.style.color = 'red';
      errorMessage.style.marginTop = '10px';
      document.getElementById('loginForm').appendChild(errorMessage);
    }
  
    errorMessage.style.display = 'none';
    errorMessage.textContent = '';
  
    if (email === '' || password === '') {
      errorMessage.textContent = 'Email dan Password harus diisi.';
      errorMessage.style.display = 'block';
      return;
    }
  
    // Validasi login
    if (email === 'z@gmail.com' && password === '12345') {
      window.location.href = "succes.html";
    } else {
      errorMessage.textContent = 'Username atau Password salah!';
      errorMessage.style.display = 'block';
    }
  });
  
  function signInWithGoogle() {
    alert("Redirecting to Google Sign-in...");
    // Simulasi: bisa diarahkan ke OAuth Google
  }
  