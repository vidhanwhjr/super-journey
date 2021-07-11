var speechRecog = window.webkitSpeechRecognition;
var recog = new speechRecog();

function selfiee() {
  document.getElementById("textbox").innerHTML = "";
  recog.start();
}

recog.onresult = function (event) {
  var Stop = event.results[0][0].transcript;
  document.getElementById("textbox").innerHTML = Stop;
   if(Stop == "take my selfie"){
     speak();
   }
}

function speak(){
  var synth = window.speechSynthesis;

  data_storage = "Blast off";

  var moooo = new speechSynthesisUtterance(data_storage);
  console.log(data_storage);

  synth.speak(moooo);

  Webcam.attach(camera1);

}

camera1 = document.getElementById("camera");
Webcam.set({
  width: 360,
  height: 200,
  image_format:'png',
  png_quality: 90
});