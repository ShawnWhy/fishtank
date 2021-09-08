

var prevX=0;
var prevY=0;
var trottle="off "
var splashThrottle="off"

function splash(e){
    var number = Math.floor(Math.random()*4+6)
    var half = number/2
    for(i=0;i<number;i++){
        var splash=$("<div>");
        if(i<half||i==half){
        splash.css("left", e.clientX-(i*10)+"px")
        splash.css("top", e.clientY+"px")

        splash.addClass("splash");
        splash.css("animation", "splashright .7s both")
        $("body").append(splash)

    }
    else{
        splash.css("left", e.clientX+(i*10)+"px")
        splash.css("top", e.clientY+"px")

        splash.addClass("splash");
        splash.css("animation", "splashleft .7s both")
        $("body").append(splash)

    }
}
}
function fly(e){
    $('.creature').css("transform", "rotate(90deg)")
    var tentacles = $(".tentacle");
    var rootposition=$(".tentacleroot").offset()
    baseY= rootposition.top
    baseX= rootposition.left
    for(let i=0;i<tentacles.length; i++){
      
        setTimeout(() => {
            var color;
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var j = 0; j < 6; j++) {
            color += letters[Math.floor(Math.random() * 16)];}
            var classes = $(tentacles[i]).attr("class");
            if(!classes.includes("wave")){
                $(tentacles[i]).addClass("wave")

            }


            $(tentacles[i]).css("top",baseY+10*i+"px")
            $(tentacles[i]).css("left",baseX+20*i+"px")
            $(tentacles[i]).css("background-color",color)

        }, i*150);

    }
    var tentacles2 = $(".tentacle2");
    var rootposition2=$(".tentacleroot4").offset()
    baseY2= rootposition2.top
    baseX2= rootposition2.left
    for(let i=0;i<tentacles2.length; i++){
       
        setTimeout(() => {
            var color2;
            var letters2 = '0123456789ABCDEF';
            var color2 = '#';
            for (var j = 0; j < 6; j++) {
            color2 += letters2[Math.floor(Math.random() * 16)];}
            var classes = $(tentacles2[i]).attr("class");
            if(!classes.includes("wave")){
                $(tentacles2[i]).addClass("wave")

            }
            
            $(tentacles2[i]).css("top",baseY2+10*i+"px")
            $(tentacles2[i]).css("left",baseX2-20*i+"px")
            $(tentacles2[i]).css("background-color",color2)

        }, i*150);

    }
    var tentacles3 = $(".tentacle3");
    var rootposition3=$(".tentacleroot3").offset()
    baseY3= rootposition3.top
    baseX3= rootposition3.left
     for(let i=0;i<tentacles3.length; i++){

        setTimeout(() => {
            var classes = $(tentacles3[i]).attr("class");
            if(!classes.includes("wave2")){
                $(tentacles3[i]).addClass("wave2")

            }
            
            $(tentacles3[i]).css("top",baseY3+10*i+"px")
            $(tentacles3[i]).css("left",baseX3+"px")

        }, i*150);

    }
    

}
function movetentacle(e, theta){
    var tentacles = $(".tentacle");
    var rootposition=$(".tentacleroot").offset()
    baseY= rootposition.top
    baseX= rootposition.left
    for(let i=0;i<tentacles.length; i++){
        setTimeout(() => {
                     $(tentacles[i]).css("top",baseY+"px")
            $(tentacles[i]).css("left",baseX+"px") 
            $(tentacles[i]).css("transform", "rotate("+ theta+"deg)translate("+20*i+"px, "+5*i+"px" )

        }, i*50);

    }
    var tentacles2 = $(".tentacle2");
    var rootposition2=$(".tentacleroot2").offset()
    baseY2= rootposition2.top
    baseX2= rootposition2.left
    for(let i=0;i<tentacles2.length; i++){
        setTimeout(() => {
            $(tentacles2[i]).css("top",baseY2+"px")
            $(tentacles2[i]).css("left",baseX2+"px") 
            $(tentacles2[i]).css("transform", "rotate("+ theta+"deg)translate("+20*i+"px, "+5*i+"px" )

        }, i*30);

    }
    var tentacles3 = $(".tentacle3");
    var rootposition3=$(".tentacleroot3").offset()
    baseY3= rootposition3.top
    baseX3= rootposition3.left
    for(let i=0;i<tentacles3.length; i++){
        setTimeout(() => {
                     $(tentacles3[i]).css("top",baseY3+"px")
            $(tentacles3[i]).css("left",baseX3+"px") 
            $(tentacles3[i]).css("transform", "rotate("+ theta+"deg)translate("+20*i+"px, "+5*i+"px" )

        }, i*20);

    }
}

function rotateOcto(e){

    var dy= e.clientY-prevY;
    var dx=e.clientX-prevX;
    if(dy!==0&&dx!==0){
    var theta = Math.atan2(dy, dx);
    theta *=180/Math.PI;
    $(".creature").css("transform", "rotate("+ theta+"deg)")
    movetentacle(e,theta);

    }
}



$(window).mousemove(function (e) { 
    var waterline=$(".waves").offset()
    var waterline=waterline.top;

    if(e.clientY<waterline+40&&e.clientY>waterline+10&&splashThrottle=="off"){
        // console.log("splash")
        splash(e);
        splashThrottle="on"
        setTimeout(() => {
            splashThrottle="off"

            
        }, 20);
    }
    if(throttle="off"){
    $(".creature").css("top",e.clientY)
    $(".creature").css("left",e.clientX)
    if(e.clientY>waterline){

     var tentacles=$(".tentacle");
     for(i=0;i<tentacles.length;i++){
         $(tentacles[i]).removeClass("wave");
        //  $(tentacles[i]).css("background-color", "rgb(24, 83, 64)");

     }

     var tentacles2=$(".tentacle2");
     for(i=0;i<tentacles2.length;i++){
         $(tentacles2[i]).removeClass("wave");
        //  $(tentacles2[i]).css("background-color", "rgb(24, 83, 64)");

     }
     var tentacles3=$(".tentacle3");
     for(i=0;i<tentacles3.length;i++){
         $(tentacles3[i]).removeClass("wave2");

     }
    setTimeout(() => {
        for(i=0;i<tentacles3.length;i++){
            $(tentacles3[i]).css("background-color", "rgb(24, 83, 64)");  

        }
        for(i=0;i<tentacles2.length;i++){
            $(tentacles2[i]).css("background-color", "rgb(24, 83, 64)");  

        }
        for(i=0;i<tentacles.length;i++){
            $(tentacles[i]).css("background-color", "rgb(24, 83, 64)");  

        }
    }, 50);
    
    if(prevX!==0&&prevY!==0){
        

        setTimeout(() => {

             rotateOcto(e)
            
        }, 200);
    }
    prevX=e.clientX;
    prevY=e.clientY;
    trottle="on"}

    else{
        fly()

   prevX=e.clientX;
   prevY=e.clientY;
   trottle="on"
    }

    
    setTimeout(() => {
        throttle="off"
        
    }, 200);}
    // values: e.clientX, e.clientY, e.pageX, e.pageY

    
})


function cleanup(){
    $(".splash").remove();
}

function producefood(){
    var left= Math.floor(Math.random()*90+10)
    var top= Math.floor(Math.random()*90+10)

    var food= $("<div>")
    food.addClass("food");
    food.css("left", left+"%");
    food.css("top", top+"%");
    $('body').append(food);

}

setInterval(() => {
  
    producefood();
    
}, 500);

setInterval(() => {
  
    $('.food').remove();
    
}, 5000);

setInterval(() => {
  
    cleanup()
    
}, 1000);

$(document).on("mouseover",".food",e=>{
    e.preventDefault();
    e.stopPropagation();
    randnumber=Math.floor(Math.random()*3)
    $(e.target).css("animation", "explode .5s both")
    setTimeout(() => {
        $(e.target).remove();

        
    }, 500);
    switch (randnumber){
        case 0:
            var newtent = $("<div>")
            newtent.addClass("tentacle")
            $("body").append(newtent);

        break;

        case 1:
            var newtent = $("<div>")
            newtent.addClass("tentacle2")
            $("body").append(newtent);

        break;

        case 2:
            var newtent = $("<div>")
            newtent.addClass("tentacle3")
            $("body").append(newtent);


    }
})