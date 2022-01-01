var image;

function upload() {
	var imgcanvas = document.getElementById("can");
	var fileInput = document.getElementById("finput");
	var fileName = fileInput.value;
	alert("You Chose: " + fileName);
	image = new SimpleImage(fileInput);
	image.drawTo(imgcanvas);
}

function makeGrey() {
	var img = image;
	for (var pixel of img.values()) {
		var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
		pixel.setRed(avg);
		pixel.setGreen(avg);
		pixel.setBlue(avg);
	}
	var imgcanvas = document.getElementById("can2");
	img.drawTo(imgcanvas);
}