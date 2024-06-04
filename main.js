var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    if(Content == "Toma mi selfie"){
        console.log("tomando selfie.....");
        speak();
    }
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data = "tomando la selfie en 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        alert("sonrie")
        take_snapshot();
        save();
    }, 5000);
}
Webcam.set({
    width:300,
    height:250,
    image_format : 'png',
    png_quality:90
})
camera = document.getElementById("camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="selfie" src="' +data_uri+ '">';
    })
}
function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie").scr;
    link.href = image;
    link.click();
}