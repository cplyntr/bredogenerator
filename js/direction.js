function setRanDir() { 		
	var dirImg = document.getElementById('dir');
	if(dirImg)
	{
     var randomnumber = Math.floor(Math.random()*4);  
	 var dir = "";
	 var title = "";	 
	 if(randomnumber == 0) {dir = "up"; title = "Обобщение";}
	 else if(randomnumber == 1) {dir = "down"; title = "Разобобщения";}
	 else {dir = "aside"; title = "Аналогия";}		 
	 dirImg.src = "images/" + dir + ".png";
	 dirImg.title = title;	 
	 }
	 
}
function setRanDirDelay(dirImg) {	
	 dirImg.src = "images/clock.png";;
	 dirImg.title = "";	 
	 setTimeout(setRanDir, 300);
}
