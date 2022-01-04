var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition()
function start() {
    document.getElementById("textbox").innerHTML= "";
    recognition.start()
}
recognition.onresult = function (event){
    console.log(event)
    var content = event.results[0][0].transcript
    document.getElementById("textbox").innerHTML= content;
    console.log(content)
speak()
}
function speak() {
    var SpeechSynthesis = window.speechSynthesis
    var synthesis = document.getElementById("textbox").innerHTML 
    var utterthis = new SpeechSynthesisUtterance(synthesis)
    SpeechSynthesis.speak(utterthis)
    Webcam.attach(camera)
    takesnapshot()
    save()
}

var camera = document.getElementById("camera")
Webcam.set({
    width: 360, height: 360, image_format: 'png', png_quality: 90

})

function takesnapshot() {
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="selfie_img" src="'+data_uri+'"/>'
    })
}
function save(){
 link = document.getElementById("link") 
 var image = document.getElementById("selfie_img").src  
 link.href = image
 link.click()
}
