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
      else if(states[networkState] != states[Connection.WIFI]){
       navigator.notification.beep(1);      
      }
  }
    checkConnection();


    // código para pegar a localização no mapquest;
   
  window.onload = function(position) {
      L.mapquest.key = '2cTeVV2w2dqN3oJi0RM8n2vwdfvnbJzR';

      var map = L.mapquest.map('map', {
          center: [position.coords.latitude,position.coords.longitude],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
      });
      map.addControl(L.mapquest.control());
  }

}); 
