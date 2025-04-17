// Check if user is logged in
if (localStorage.getItem('loggedIn') !== 'true') {
    alert('You must be logged in to view your profile!');
    window.location.href = 'login.html';
  }
  
  // Show email if stored
  document.getElementById('user-email').innerText =
    localStorage.getItem('email') || 'User';
  
  // Logout function
  function logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('email');
    alert('Logged out successfully!');
    window.location.href = 'login.html';
  }
  