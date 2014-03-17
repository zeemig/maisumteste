function number_write(x)
{ 
  var text_box = document.getElementById("number");
  if(x>=0 && x<=9)
  {
    if(isNaN(text_box.value)) 
   text_box.value = 0;
    if (text_box.value<99999){
 text_box.value = (text_box.value + x);
  } } 
 if (text_box.value > 99999){ //quando tem 6 digitos corre este codigo
   numero = text_box.value;
   window.location = "index.php?area=confirmacao&n="+numero+"";    //aqui fica o link &n= numero que se inseriu
   }  
  
}   

function number_c()
{
  var text_box = document.getElementById("number");
  text_box.value='';
  
  text_box.value = num;
}           
