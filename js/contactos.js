document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = event.target.EmailUsuario.value;
    const nombreApellido = event.target['Nombre-Apellido'].value;
    const edad = event.target.Edad.value;

    localStorage.setItem("usuario", JSON.stringify({ email, nombreApellido, edad }));
    window.location.href = "./resumen.html";
});
