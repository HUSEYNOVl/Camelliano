// Show Register Form
function showRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'flex';
    document.getElementById('form-title').innerText = 'Create a New Account';
  }
  
  // Show Login Form
  function showLogin() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'flex';
    document.getElementById('form-title').innerText = 'Login to Your Account';
  }
  
  // Register
  document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
  
    const user = { email, password };
    localStorage.setItem('user', JSON.stringify(user));
  
    document.getElementById('login-message').innerText = '✅ Registered successfully. Please log in.';
    showLogin();
  });
  
  // Login
  document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    const storedUser = JSON.parse(localStorage.getItem('user'));
  
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('email', email);
      window.location.href = 'home.html'; // Make sure home.html exists!
    } else {
      document.getElementById('login-message').innerText = '❌ Invalid email or password.';
    }
  });
  