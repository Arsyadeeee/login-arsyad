document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const repeatPassword = document.getElementById('repeat-password').value.trim();
    const errorMessage = document.getElementById('error-message');
  
    errorMessage.style.display = 'none';
    errorMessage.textContent = '';
  
    if (!fullname || !email || !username || !password || !repeatPassword) {
      errorMessage.textContent = 'Semua kolom harus diisi!';
      errorMessage.style.display = 'block';
      return;
    }
  
    if (password !== repeatPassword) {
      errorMessage.textContent = 'Password tidak cocok!';
      errorMessage.style.display = 'block';
      return;
    }
  
    // Simulasi sukses register
    alert('Registrasi berhasil!');
    window.location.href = "succes.html"; // Ganti dengan halaman login sebenarnya
  });
  