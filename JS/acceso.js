//FUNCIONALIDAD DE ACCESO
/*const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const registerBtnlisto = document.getElementById('registerlisto');
const loginBtnlisto = document.getElementById('loginlisto');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


registerBtnlisto.addEventListener('click', () => {
   // container.classList.add("active");
    setTimeout(function() {
        window.location.href = 'exitoacceso.html';
    }, 1000); // Redirigir después de 3 segundos (3000 milisegundos)
});

registerBtnlisto.addEventListener('click', () => {
   // container.classList.add("active");
    setTimeout(function() {
        window.location.href = 'exitoacceso.html';
    }, 1000); // Redirigir después de 3 segundos (3000 milisegundos)
});*/
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const registerBtnlisto = document.getElementById('registerlisto');
const loginBtnlisto = document.getElementById('loginlisto');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

registerBtnlisto.addEventListener('click', () => {
    // Validar campos del formulario de registro
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (email && password) {
        // Redirigir solo si los campos están llenos y son válidos
        setTimeout(function() {
            window.location.href = 'exitoacceso.html';
        }, 1000); // Redirigir después de 1 segundo (1000 milisegundos)
    } else {
        console.log('Por favor, complete todos los campos.');
        // Puedes mostrar un mensaje de error al usuario si los campos están vacíos o son inválidos
    }
});

loginBtnlisto.addEventListener('click', () => {
    // Validar campos del formulario de inicio de sesión
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (email && password) {
        // Redirigir solo si los campos están llenos y son válidos
        setTimeout(function() {
            window.location.href = 'home.html';
        }, 1000); // Redirigir después de 1 segundo (1000 milisegundos)
    } else {
        console.log('Por favor, complete todos los campos.');
        // Puedes mostrar un mensaje de error al usuario si los campos están vacíos o son inválidos
    }
});












/*
function validar(){
    var nombre= document.forms[0]["txtNombre"].value;

    var resp=(nombre=="")?false:true;
    if(!resp){
    // alert("Por favor rellena los campos solicitados);

    Swal.fire({
    icon: 'error',
    title: 'ERROR!',
    text: 'Por favor, rellena los campos solicitados',
    footer: '<a href="#">Por qué tengo este problema?</a>'
});
    }
    
    return resp;
}*/