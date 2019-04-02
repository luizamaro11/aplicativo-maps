// This is a JavaScript file
function retorno(){
  navigator.vibrate(6000)
}
$(document).on('click','#mapa',function(){
  function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.NONE] = 'sem conexão, por favor conectar a rede!';
    document.addEventListener("offline", retorno, true);

    alert( states[networkState]);
}
  checkConnection();
})
