function getPingPongString(){
  var outString = ''
  for(var i=1;i<=100;i++){
    var iStr=i+'';	
    var jump = 0;      
    if(i%5===0 || iStr.indexOf('5')!=-1){
      document.write('PING');
      jump=1;
    }
    if(i%7===0 || iStr.indexOf('7')!=-1){
      document.write('PONG')
      jump=1;
    }	
    if(!jump){
      document.write(i)
    }    
    document.write('<br />')
  }  
}
