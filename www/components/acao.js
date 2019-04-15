// This is a JavaScript file
$(document).on('click','#mapa',function(){

  // functiion que verificará a conexao da internet se não tiver irá gerar 3 beep e vibrará por 6 segundos
  function checkConnection() {
    var networkState = navigator.connection.type;
  
    var states = {};
    states[Connection.NONE] =  'sem conexão, por favor conectar a rede!';
    if(states[networkState]==states[Connection.NONE]){
      navigator.vibrate([9000]);
      navigator.notification.beep(3);
      alert(states[networkState]);      
      }
    else{

    }
  }
    checkConnection();
  // o programa nesse momento irá pegar a localização atual do dispositivo e mostrará a localização

    document.addEventListener("deviceready", onDeviceReady, false);
    var watchID = null;

    function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
        var options = { timeout: 30000 };
        watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
    }

    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                            'Longitude: ' + position.coords.longitude     + '<br />' +
                            '<hr />'      + element.innerHTML;
    }

    function clearWatch() {
        if (watchID != null) {
            navigator.geolocation.clearWatch(watchID);
            watchID = null;
        }
    }

    function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
    }
}); 
