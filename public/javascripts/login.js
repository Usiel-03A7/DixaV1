/* Inscribirse */
// function signup() {
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     var email = document.getElementById("email").value;
//     var name = document.getElementById("name").value;
//     var lastname = document.getElementById("lastname").value;
//     var phone = document.getElementById("phone").value;
//     var address = document.getElementById("address").value;
//     var city = document.getElementById("city").value;
//     var state = document.getElementById("state").value;
//     var zip = document.getElementById("zip").value;
//     var country = document.getElementById("country").value;
//     var data = {
//         username: username,
//         password: password,
//         email: email,
//         name: name,
//         lastname: lastname,
//         phone: phone,
//         address: address,
//         city: city,
//         state: state,
//         zip: zip,
//         country: country
//     };
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "/signup", true);
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.send(JSON.stringify(data));
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             var response = JSON.parse(xhr.responseText);
//             if (response.status === "success") {
//                 window.location.href = "/login";
//             } else {
//                 alert(response.message);
//             }
//         }
//     };
// }
/*Mostrar contraseña checkbox*/

function myFunction(){
    var x = document.getElementById("password");
    if (x.type === "text") {
        x.type = "password";
    } else {
        x.type = "text";
    }
}
/*Mostrar contraseña checkbox*/

