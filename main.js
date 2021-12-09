function startClassification()
{

navigator.mediaDevices.getUserMedia({
    audio: true
});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/s3z6A-V6H/model.json',modelReady);

}

function modelReady()  
{

    classifier.classify(gotResults);

}

function gotResults(error,results)

{
if (error){

    console.error(error);
}
else{

    random_nummber_r = Math.floor(Math.random()*255) +1; 
    random_nummber_g= Math.floor(Math.random()*255) +1; 
    random_nummber_b = Math.floor(Math.random()*255) +1; 

    document.getElementById("result_label").innerHTML='I can hear -' +results[0].label; 
    document.getElementById("result_confidence").innerHTML= 'Accuracy -' +(results[0].confidence*100).toFixed(2)+"%"; 
    document.getElementById("result_label").style.color= "rgb("+random_nummber_r+","+random_nummber_g+","+random_nummber_b+")"; 
    document.getElementById("result_confidence").style.color= "rgb("+random_nummber_r+","+random_nummber_g+","+random_nummber_b+")"; 

    img1=document.getElementById("dog");
    img2=document.getElementById("cat");
  

    if(results[0].label=="bark")
    {
        img1.src='dog.jpeg';
        img2.src='cat image.png';
      
    }else if(results[0].label=="meowing")
    {
        img1.src='dog.jpeg';
        img2.src='cat image.png';
       
    }else 
    {
        img1.src='dog.jpeg';
        img2.src='cat image.png';
        
    }

}

}