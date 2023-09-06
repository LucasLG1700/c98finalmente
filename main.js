var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
    
    recognition.start();
}

recognition.onresult = function(event){

    console.log(event);

    var Content = event.results[0][0].transcript;

   
    console.log(Content);
    if(Content =="selfie")
{
    console.log("tirando selfie --- ");
        speak();
}
}
function speak(){
    var synth = window.speechSynthesis;

    
    Webcam.attach(camera);

    setTimeout(function()
    {
        imgeid = "selfie1"
        speakData = "tirando sua selfie em 5 segundos."
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
        takeSelfie();
       
        
    },5000)
    setTimeout(function()
    {
        imgeid = "selfie2"
        speakData = "tirando sua selfie em 10 segundos."
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
        takeSelfie();
       
        
    },10000)
    setTimeout(function()
    {
        imgeid= "selfie3"
        speakData = "tirando sua selfie em 15 segundos."
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
        takeSelfie();
       
        
    },15000)

    
}
function takeSelfie()
{
    Webcam.snap(function(data_uri){
        if( imgeid=="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }
        if( imgeid=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
        }
        if( imgeid=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
        }
    }
        
        );}

        camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});