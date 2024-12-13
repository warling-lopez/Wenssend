const Enter = (Enter_register)=>{
    Enter_register = window.location.href = "/register.html"
    return Enter_register;
}
const register = ( Enter_register )=> {
    
        // Obtener referencias al formulario y campos
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    const confirmPassword = document.getElementById('passwordConfirm').value;

    if (passwordInput !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }else{
        localStorage.setItem('nombre', nombre);
        localStorage.setItem('email', email);
        localStorage.setItem('password', passwordInput);
        console.log('Usuario registrado exitosamente.');
        Enter_register = window.location.href = "/index.html"
        localStorage.setItem('keyEnter', "true");
        return;
    }    

    
}

