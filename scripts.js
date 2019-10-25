const button = document.getElementById("question"); 

// I did not add validation. This is just a prototype for an experiment.

button.addEventListener('click', function() {
    let y = Math.floor(Math.random()*100)+1;

	    if(y % 2 == 1){
		    console.log("Yes")
		    var node = document.createElement("LI");                
			var textnode = document.createTextNode("Yes");    
			//node.removeChild(textnode);      
			node.appendChild(textnode);                             
			document.getElementById("answer").appendChild(node);    


			}
			else{
		    console.log("No")
		    var node = document.createElement("LI");                 
			var textnode = document.createTextNode("No");         
			//node.removeChild(textnode);    
			node.appendChild(textnode);                            
			document.getElementById("answer").appendChild(node);   

			};
});


setInterval(function(){
  $('li').remove();
}, 5000);




