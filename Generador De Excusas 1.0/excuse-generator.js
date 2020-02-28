var leadins=[
"Lo siento voy con demora pero",
"No puedo salir debido a que...",
"Realmente iba a ir a verte pero...",
"Tenia un regalo genial pero...",
"Iba de camino a tu casa y...",
"Sonara increible pero...",
]

var perpetrators = [

"Un perro con 2 colas",    
"Un centauro me pidio la hora ", 
"Harry Potter",
"Mi abuela",   
]

var factors=[


"Bailo sensualmente",    
"y Me partio una pierna", 
"e intento ofrecerme la silla o el pastel",
"Se intoxico en alcohol",       
    
]


var generator=function(parts){
	return function(){
		var string=" ";
		for(i in parts){
			var rand=Math.floor(Math.random()*parts[i].length);
			var space=(i==parts.length-1)?"":" ";
			string+=parts[i][rand]+space;
		}
		string+=".";
		return string

	}

}

excuseGenerator=generator([leadins, perpetrators,factors]);
