document.addEventListener('DOMContentLoaded', function() {
    // Manejar el formulario de login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const remember = document.getElementById('remember').checked;
            
            // Validación simple
            if (!email || !password) {
                alert('Por favor complete todos los campos');
                return;
            }
            
            // Aquí iría la lógica de autenticación real
            console.log('Login attempt:', { email, password, remember });
            
            // Simular autenticación exitosa
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);
            
            // Redirigir al dashboard
            window.location.href = 'index.html';
        });
    }
    
    // Manejar el formulario de registro
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            // Validaciones
            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden');
                return;
            }
            
            if (password.length < 8) {
                alert('La contraseña debe tener al menos 8 caracteres');
                return;
            }
            
            // Aquí iría la lógica de registro real
            console.log('Registration data:', { 
                firstName, 
                lastName, 
                email, 
                phone, 
                password 
            });
            
            // Guardar usuario en localStorage (simulación)
            const users = JSON.parse(localStorage.getItem('users') || [];
            users.push({ firstName, lastName, email, phone, password });
            localStorage.setItem('users', JSON.stringify(users));
            
            alert('Registro exitoso. Por favor inicie sesión.');
            window.location.href = 'login.html';
        });
    }
    
    // Verificar autenticación al cargar otras páginas
    if (!window.location.pathname.includes('login.html') && 
        !window.location.pathname.includes('register.html')) {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            window.location.href = 'login.html';
        }
    }
    
    // Mostrar el email del usuario logueado
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
        const userEmailElements = document.querySelectorAll('.user-email');
        userEmailElements.forEach(el => {
            el.textContent = userEmail;
        });
    }
});

// Función para cerrar sesión
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    window.location.href = 'login.html';
}