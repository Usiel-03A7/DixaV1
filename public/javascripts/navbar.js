const search = document.getElementById('search');
const lookingFor = document.getElementById('lookingFor');

search.addEventListener('click', (e) => {
    e.preventDefault();
    // si el input esta vacio
    if (!lookingFor.value) {
        // mostrar alerta
        alert('Necesitas llenar el campo');
        lookingFor.value = '';
        
    } else {
        alert("Estas buescando el termino "  + lookingFor.value);
        lookingFor.value = '';
    }
});
lookingFor.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        // si el input esta vacio
        if (!lookingFor.value) {
            // mostrar alerta
            alert('Necesitas llenar el campo');
            lookingFor.value = '';
            
        } else {
            alert("Estas buescando el termino "  + lookingFor.value);
            lookingFor.value = '';
        }
    }
});
/* Buscar en página*/



