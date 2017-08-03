// JavaScript Document

var tweetHijo = document.getElementById("tweet");

//funcion agregar tweet
	
	var postBtn = document.getElementById("tweet-btn");
	
	postBtn.addEventListener("click", function(){
			
		var textoPost = document.getElementById("tweet-area").value;
		
		var creaTweet = document.createElement("div");
		creaTweet.setAttribute("id", "tweet");
		creaTweet.innerHTML = '<h2>@alvarorios</h2>'+
							  '<p id="texto-tweet">'+textoPost+'</p>'+
						      '<p id="boton-like"><span class="  glyphicon glyphicon-heart"></span></p>'+
						      '<p id="contador"></p>'+
						      '<p id="boton-eliminar">Eliminar Tweet</p>';

		document.getElementById("tweet-principal").prepend(creaTweet);
		
		document.getElementById("tweet-area").value = "";
		
		
		// funcion eliminar - elimina nodos nuevos 	
		
		var tweetHijo = document.getElementById("tweet");
						
		var eliminaBtn = document.getElementById("boton-eliminar");

		var eliminaTweetHijo = function(){		
			document.getElementById("tweet-principal").removeChild(tweetHijo);
		};

		for (var i = 0; i <= tweetHijo.children.length-1; i++ ){
			eliminaBtn.addEventListener("click", eliminaTweetHijo);
		}
		
		// funcion contador para nodos nuevos
	
		var likesBtn = document.getElementById("boton-like");
		var contadorLikes=0;
		
		var generaLikes = function(){
		contadorLikes++;
		this.nextSibling.innerHTML= contadorLikes;
		this.style.color="#e0245e";
		};
		
		for (var l = 0; l <= tweetHijo.children.length-1; l++ ){
			likesBtn.addEventListener("click", generaLikes);
		}
		
		
	},false );
	
	

// funcion eliminar - elimina nodo existente

var eliminaBtn = document.getElementById("boton-eliminar");

var eliminaTweetHijo = function(){		
	document.getElementById("tweet-principal").removeChild(tweetHijo);
};

for (var i = 0; i <= tweetHijo.children.length-1; i++ ){
		eliminaBtn.addEventListener("click", eliminaTweetHijo , false);
}


// funcion contador para nodo existente

var likesBtn = document.getElementById("boton-like");
var contadorLikes=0;
		
var generaLikes = function(event){
	event = event.target;
	contadorLikes++;
	this.nextElementSibling.innerHTML= contadorLikes;
	this.style.color="#e0245e";
};
		
for (var l = 0; l <= tweetHijo.children.length-1; l++ ){
	likesBtn.addEventListener("click", generaLikes);
}


	