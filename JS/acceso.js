const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
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