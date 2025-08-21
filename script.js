function showLoginForm() {
            document.getElementById('loginForm').classList.remove('hidden');
            document.getElementById('registerForm').classList.add('hidden');
        }

        function showRegisterForm() {
            document.getElementById('loginForm').classList.add('hidden');
            document.getElementById('registerForm').classList.remove('hidden');
        }

        function togglePassword(element) {
            const input = element.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                element.textContent = '🙈';
            } else {
                input.type = 'password';
                element.textContent = '👁️';
            }
        }

        function showForgotPassword() {
            alert('Fitur lupa password akan segera tersedia!');
        }

        function loginWithGoogle() {
            alert('Login dengan Google akan segera tersedia!');
        }

        // Handle form submissions
        document.getElementById('loginFormElement').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            
            if (email && password) {
                alert(`Login berhasil!\nEmail: ${email}`);
            }
        });

        document.getElementById('registerFormElement').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('input[type="text"]').value;
            const school = this.querySelectorAll('input[type="text"]')[1].value;
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;
            
            if (name && school && email && password) {
                alert(`Registrasi berhasil!\nNama: ${name}\nSekolah: ${school}\nEmail: ${email}`);
                showLoginForm();
            }
        });