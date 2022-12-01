var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var images = [];
images.length = 22;


async function getData(){
    for(var i = 1 ; i < images.length ; i++){
        images[i] = new Image();
        console.log(i.toString);
      await  fetch('https://receptayyipilhan.github.io/JavaScript-APIs/HW3/sprite_ninja/'+ i.toString()+'.png').then(res=>res.blob())
                                                 .then(blob => {
                                                    let objectURL = URL.createObjectURL(blob);
                                                    images[i].src = objectURL;
                                                 });
    }

}

getData();

var i = 1;
var y = 0;
var test;

var kontrol=0;

btnPause.addEventListener("click", function(){
    if(kontrol==0){
    clearInterval(test);
        kontrol=1;
    }
    else{
        test = setInterval(function(){
            i++;
            if( i >= 22){
                i = 1;
            }
            c.clearRect(275,275,275,275);
            c.drawImage(images[i],275,275,275,275);
        },10)
        kontrol=0;
    }
});

btnStop.addEventListener("click", function(){
    clearInterval(test);
});

btnNext.addEventListener("click", function(){
    i++;
    if(i == 22){
        i =1;
    }
    c.clearRect(275,275,275,275);
    c.drawImage(images[i],275,275,275,275);
});

btnPrev.addEventListener("click", function(){
    i--;
    if(i == 0){
        i = 22;
    }
    c.clearRect(275,275,275,275);
    c.drawImage(images[i],275,275,275,275);
});

btnStart.addEventListener("click", function(){
    i=1;
    test = setInterval(function(){
        i++;
        y++;
        if( i >= 22){
            i = 1;
        }
        c.clearRect(275,275,275,275);
        c.drawImage(images[i],275,275,275,275);
    },250)
});

