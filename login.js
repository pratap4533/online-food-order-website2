// login.html
document.getElementById('loginBtn').addEventListener('click', () => {
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = '/foods.html'; // redirect after login
});
