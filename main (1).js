// Crea una referencia para el elemento canvas

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d")
window.addEventListener("keydown", my_keydown);

function add() {
	img_imgTag = new Image(); //define una variable para una imagen nueva
	img_imgTag.onload = uploadimg; // establece una función para cargar la variable
	img_imgTag.src = img_image;   // carga la imagen
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keypressed);

	if((keyPressed >=97 && keyPressed<=122)  (keyPressed>=65 && keyPressed<=90))
	{
		aplhabetkey();
		document.getElementById("d1").innerHTML="You pressed Alphabet Key";
		console.log("alpahet key");
	}
}

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keypressed);

	if((keyPressed >=97 && keyPressed<=122)  (keyPressed>=65 && keyPressed<=90))
	{
		aplhabetkey();
		document.getElementById("d1").innerHTML="You pressed Alphabet Key";
		console.log("alpahet key");
	}
}

function aplhabetkey()
{
	img_image="Alpkey.png";
	add();

}
function numberkey()
{
	img_image="numkey.png";
	add();
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
