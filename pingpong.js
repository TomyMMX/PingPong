function getPingPongString(){
  var outString = ''
  for(var i=1;i<=100;i++){
    var iStr=i+'';	
    if(i%35===0||
       (iStr.indexOf('7')!=-1&&iStr.indexOf('5')!=-1)||
       (iStr.indexOf('7')!=-1&&i%5==0)||
       (iStr.IndexOf('5')!=-1&&i%7==0)){
    	outString+='PINGPONG'      
    }
    else if(i%7===0||iStr.indexOf('7')!=-1){
      outString+='PONG'
    }
    else if(i%5===0||iStr.indexOf('5')!=-1){
      outString+='PING'
    }	
    else{
      outString+= i
    }
    
    outString+='<br />'
  }
  document.write(outString);
}
