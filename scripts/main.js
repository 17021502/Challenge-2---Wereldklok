setInterval(klok, 500); //De setinterval heb ik ingesteld op een halve seconden zodat er ieder halve seconden een controle op tijd uitgevoerd wordt.


	var startTime = 0;
	var tl1 = new TimelineMax();
function klok() {
var time = new Date()


    
// De volgende regels zorgen ervoor dat het aantal uur, minuten en seconden van de lokale computertijd overgenomen worden.
    uur = time.getHours(),
    min = time.getMinutes(),
    sec = time.getSeconds();

//De voldende regels zorgen ervoor dat er een 0 vóór de getallen onder de 10 verschijnen. Dus bij bijv 9 seconden komt er 09 seconden te staan.
    if (uur < 10)
		uur = "0" + uur;
	if (min < 10)
		min = "0" + min;

	if (sec < 10)
		sec = "0" + sec;

if (sec < 20 ) {
	backgroundNacht();
	}

	else if (sec > 20 ) {
    backgroundZonsopgang();
	}  

	if (sec > 35 ) {
	backgroundMiddag();
	}

	if (sec > 45 ) {
	backgroundZonsondergang();
	} 



//De volgende regel zorgt ervoor dat de uur, minuten en seconden binnen de div in HTML verschijnen. Ze worden ook door een ':' van elkaar gescheiden.
document.getElementById('klok').innerHTML = uur + ":" + min + ":" + sec; 


}


	tl1.call(klok)
			.from('#klok', 3.0, { ease: Bounce.easeOut, y: -500 })





function backgroundNacht() {
	document.getElementById("klok").style.backgroundImage = "url('images/night.jpg') ";
	document.getElementById("tijdplaatje").style.backgroundImage = "url('images/moon.gif') ";
	document.body.style.backgroundImage = "url('images/nightgradient.jpg') ";
	document.getElementById("klok").style.color = "white";

}

function backgroundZonsopgang() {
	document.getElementById("klok").style.backgroundImage = "url('images/sunrise.jpg')";
	document.getElementById("tijdplaatje").style.backgroundImage = "url('images/sunrise.gif') ";
	document.body.style.backgroundImage = "url('images/sunrisegradient.jpg') ";
	document.getElementById("klok").style.color = "black";
}

function backgroundMiddag() {
	document.getElementById("klok").style.backgroundImage = "url('images/afternoon.jpg') ";
	document.getElementById("tijdplaatje").style.backgroundImage = "url('images/sun.gif') ";
	document.body.style.backgroundImage = "url('images/sungradient.jpg') ";
	document.getElementById("klok").style.color = "black";

}

function backgroundZonsondergang() {
	document.getElementById("klok").style.backgroundImage = "url('images/evening.jpg')";
	document.getElementById("tijdplaatje").style.backgroundImage = "url('images/sunset.gif') ";
	document.body.style.backgroundImage = "url('images/sunsetgradient.jpg') ";
	document.getElementById("klok").style.color = "black";
}