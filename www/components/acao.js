// This is a JavaScript file
$(document).on('click','#mapa',function(){
  function checkConnection() {
    var networkState = navigator.connection.type;
  
    var states = {};
    states[Connection.NONE] =  'sem conexão, por favor conectar a rede!';
    if(states[networkState]==states[Connection.NONE]){
      navigator.vibrate([9000]);
      navigator.notification.beep(3);
      alert(states[networkState]);      
      }
    
    
    
}
    checkConnection();
  
})
