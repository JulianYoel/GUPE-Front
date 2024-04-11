function switchForm() {
    var switchButton = document.getElementById("switchButton");
    var leftLabel = document.getElementById("leftLabel");
    var rightLabel = document.getElementById("rightLabel");
    var loginCard = document.getElementById("loginCard");
    var registerCard = document.getElementById("registerCard");
  
    if (switchButton.checked) {
     
      loginCard.style.display = "none";
      registerCard.style.display = "block";
    } else {
    
      loginCard.style.display = "block";
      registerCard.style.display = "none";
    }
  }
  
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Aquí debes enviar los datos de inicio de sesión al backend Django para autenticación
    // Puedes usar AJAX para enviar la solicitud al servidor
    // Por ejemplo, utilizando la biblioteca Axios: https://github.com/axios/axios
    // axios.post('/login', { username: username, password: password })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    alert("Iniciando sesión con: " + username);
  });
  
  document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var regUsername = document.getElementById("regUsername").value;
    var regPassword = document.getElementById("regPassword").value;
    var userType = document.getElementById("userType").value;
    // Aquí debes enviar los datos de registro al backend Django para crear un nuevo usuario
    // Puedes usar AJAX para enviar la solicitud al servidor
    // Por ejemplo, utilizando la biblioteca Axios: https://github.com/axios/axios
    // axios.post('/register', { username: regUsername, password: regPassword, userType: userType })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    alert("Registrando usuario: " + regUsername + ", Contraseña: " + regPassword + ", Tipo: " + userType);
  });
  
  function googleLogin() {
    // Aquí puedes implementar la lógica para el inicio de sesión con Google
    // Puedes usar el SDK de Google Sign-In para autenticar al usuario con Google
    // https://developers.google.com/identity/sign-in/web
    alert("Iniciando sesión con Google...");
  }
  
  