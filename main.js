prediction="";

Webcam.set({
    width:350,
    height:350,
    image_format:"png",
    png_quality:90

});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function capture()
 {
   Webcam.snap(function(data_uri)
  {
    document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>";

   });
 }

console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/z3_Pqc_4r/model.jason",modelLoaded);

function modelLoaded()
{
    console.log("Model is loading")
}

function speak()
{
    var synth=window.speechSynthesis;
    speak_data="The prediction is"+prediction;
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
}